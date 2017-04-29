import Actions from './actionTypes'
import * as DB from '../../firebase/database'
import { browserHistory } from 'react-router';

function addBid(productData) {
    console.log('33333333333333', productData)
    return dispatch => {
        dispatch(addBidRequest());
        return DB.database.ref('/BitProducts').on('value', (snap) => {
            var todo = snap.val();
            console.log('ddddddddddddddddddddd', todo)
            var d = new Date().getTime();
            // var oneDay = 24*60*60*1000; 
            console.log('ssssssssssssssssssssss', productData.edate)
            var e = new Date(productData.edate)
            var y = e.getTime()
            console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', y)
            if (y < new Date()) {
                alert("Sorry! Bidding time has been expired")
            } else {
                DB.database.ref('/BidData').push(productData, function (error) {
                    console.log('data', productData)
                    if (error) {
                        alert('error')
                    }

                    else {
                        dispatch(addBidRequestSuccess())
                        alert('successfully added')
                        browserHistory.push('/main')
                    }
                });
            }
        })



    }
}


export function addBidRequest() {
    return {
        type: Actions.ADDBIDDINGREQUEST
    }
}


export function addBidRequestSuccess(data) {
    return {
        type: Actions.ADDBIDDINGREQUESTSUCCESS,
        data
    }

}

export default addBid;