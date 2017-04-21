import Actions from './actionTypes'
import * as DB from '../../firebase/database'
import { browserHistory } from 'react-router'
//import * as firebase from 'firebase'

function logoutRequest(loginData) {
    console.log('aaaaa', loginData)
    return dispatch => {
        dispatch(LogoutRequest());
        DB.auth.signOut()
        .then((data) => {
         dispatch(LogoutRequestSuccess(data))
            alert('logoutsuccess')
              browserHistory.push('/signupCon')
        })
            .catch((error) => {
                console.log('kjjjjjjjjjjjjjjj', error)
                alert('error')
                dispatch(LogoutRequestFailed(error))
            })

    }

}


export function LogoutRequest() {
    return {
        type: Actions.LOGOUTREQUEST
    }
}


export function LogoutRequestSuccess(data) {
    return {
        type: Actions.LOGOUTREQUESTSUCCESS,
        data
    }
}


export function LogoutRequestFailed() {
    return {
        type: Actions.LOGOUTREQUESTFAILED
    }
}

export default logoutRequest;