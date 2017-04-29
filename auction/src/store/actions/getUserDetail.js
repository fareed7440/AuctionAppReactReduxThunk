import Actions from './actionTypes'
import * as DB from '../../firebase/database'



function UserDetail(){
    
    return dispatch => {
        dispatch(userDetailRequest());
    var user = DB.auth.currentUser;
    
    console.log('fgggggggggggggggggggggggg',user);
// var name, email,uid, 

// if (user != null) {
//   name = user.Name;
//   email = user.email;
//   uid = user.uid;
// }
        // DB.auth.onAuthStateChanged(function(user){
        //     if(user){
        //         console.log('dfhjdfhdkfh',user)
        //     }
        // })
// if (authData) {
//   console.log("Authenticated user with uid:", authData.uid);
// }

        // var uId = localStorage.setItem("uId",loguser);
        // console.log("uiddddd",uId);
        // return DB.database.ref('/SignupUser').child(uId).on('value',snap =>{
        //     const todo = [];
        // snap.forEach(snap=>{
        //     todo.push(snap.val());
        //     console.log('todddpppppp',todo)

        // })
        dispatch(userDetailRequestSuccess(user));
      
    
//  })


    }
}






export function  userDetailRequest (){
    return{
        type : Actions.USERDETAIL
    }
}


export function userDetailRequestSuccess(data){
    return{
        type : Actions.USERDETAILSUCCESS,
        data
    }
}



export default UserDetail;