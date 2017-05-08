import Actions from './actionTypes'
import * as DB from '../../firebase/database'
import { browserHistory } from 'react-router'
import firebase from 'firebase'
//import * as firebase from 'firebase'

export default function fbloginRequest() {
  
    return dispatch => {
        dispatch(FbLoginRequest());
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            console.log('resultttt',result)
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
    dispatch(FbLoginRequestSuccess(user))
            alert('login success')
          
            browserHistory.push('/main')
  // ...
}).catch(function(error) {
  // Handle Errors here.
 console.log("error",error);
 
  // ...
});
      

}

}

export function FbLoginRequest() {
    return {
        type: Actions.FBLOGINREQUEST
    }
}


export function FbLoginRequestSuccess(data) {
    return {
        type: Actions.FBLOGINREQUESTSUCCESS,
        data
    }
}


export function FbLoginRequestFailed() {
    return {
        type: Actions.FBLOGINREQUESTFAILED
    }
}


