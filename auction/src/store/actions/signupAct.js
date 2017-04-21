import Actions from './actionTypes'
import * as DB from '../../firebase/database'
import {browserHistory} from 'react-router'
//import * as firebase from 'firebase'

function signupRequest(SignUpData) {
    console.log('aaaaa',SignUpData)
  return dispatch => {
        dispatch(SignupRequest());
        DB.auth.createUserWithEmailAndPassword(
            SignUpData.email, SignUpData.password
        )
            .then((data) => {
                const userRef =DB.database.ref('SignupUser/'+data.uid);
                userRef.set({
                   uid: data.uid,
                    name: SignUpData.name,
                    email: data.email
                },
                    signuppSuccessData => {
                        dispatch(SignupRequestSuccess({
                            uid: data.uid,
                            name: SignUpData.name,
                            email: data.email,


                        }))
                        alert('signup successfully')
                        browserHistory.push('/loginCon')
                      
                    }
                )
            })  
            .catch((error) => {
                console.log('kjjjjjjjjjjjjjjj',error)
                alert('error')
                dispatch(signupRequestFailed(error))
            })

    }

}


export function SignupRequest() {
    return {
        type: Actions.SIGNUPREQUEST
    }
}


export function SignupRequestSuccess(data) {
    return {
        type: Actions.SIGNUPREQUESTSUCCESS,
        data
    }
}


export function signupRequestFailed() {
    return {
        type: Actions.SIGNUPREQUESTFAILED
    }
}

export default signupRequest;