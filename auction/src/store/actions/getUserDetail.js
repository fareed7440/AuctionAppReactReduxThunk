import Actions from './actionTypes'
import * as DB from '../../firebase/database'



function UserDetail (){
    return dispatch => {
        dispatch(userDetailRequest());
        var uId = localStorage.setItem("uId");
        console.log("uiddddd",uId);
        return DB.database.ref('/SignupUser').child(uId).on('value',snap =>{
            const todo = [];
        snap.forEach(snap=>{
            tood.push(snap.val());

        })
        dispatch(userDetailRequestSuccess(data));
        })


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