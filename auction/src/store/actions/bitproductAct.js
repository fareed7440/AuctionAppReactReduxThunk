import Actions from './actionTypes'
import * as DB from '../../firebase/database'
function viewBitRequest(data) {

    return dispatch => {
        dispatch(ViewBitRequest())
        console.log('dataaaaaaaaaaaaaaaaaaaaaaaaa', data)
        return DB.database.ref('/BitProducts').child(data).once('value', snap => {
            console.log('qqqqqqqqqqqqqqqqqq', snap.val())
            var arr = [];
            snap.forEach(childSnapshot=>{
                var product = childSnapshot.val();
                arr.push(product)
            })
           dispatch(ViewBitRequestSuccess(arr))
        });
    }
}



export function ViewBitRequest() {
    return {
        type: Actions.BIDDINREQUEST
    }
}


export function ViewBitRequestSuccess(data) {
    return {
        type: Actions.BIDDINREQUESTSUCCESS,
        data
    }
}


// export function ViewBitRequestFailed() {
//     return {
//         type: Actions.BIDDINREQUESTFAILED
//     }
// }

export default viewBitRequest;