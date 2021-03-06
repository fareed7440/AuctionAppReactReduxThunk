import Actions from './actionTypes'
import * as DB from '../../firebase/database'
import { browserHistory } from 'react-router'
//import * as firebase from 'firebase'

function loginRequest(loginData) {
    console.log('aaaaa', loginData)
    return dispatch => {
        dispatch(LoginRequest());
        DB.auth.signInWithEmailAndPassword(loginData.email, loginData.password).then((data) => {
            // DB.database.ref('loginUser'+data.uid).set(loginData)
            var userDetails = {
                userId: data.uid,
                userName: data.name
            }
            console.log("userDetails", userDetails)
            console.log("data", data)
            dispatch(LoginRequestSuccess(data))
            alert('login success')
          
            browserHistory.push('/main')

        })

            .catch((error) => {
              
                alert('error')
                dispatch(LoginRequestFailed(error))
            })

    }

}


export function LoginRequest() {
    return {
        type: Actions.LOGINREQUEST
    }
}


export function LoginRequestSuccess(data) {
    return {
        type: Actions.LOGINREQUESTSUCCESS,
        data
    }
}


export function LoginRequestFailed() {
    return {
        type: Actions.LOGINREQUESTFAILED
    }
}


export default loginRequest;