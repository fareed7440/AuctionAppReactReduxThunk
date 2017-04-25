import Actions from './actionTypes'
import * as DB from '../../firebase/database'
function viewProductRequest() {
    return dispatch => {
        dispatch(ViewProductRequest());
        return DB.database.ref('/BitProducts').on('value', snap => {
            var productData = [];
            snap.forEach(ChildSnapshot => {
                var data = ChildSnapshot.val();
                productData.push(data);
                var time1 = ChildSnapshot.val().sdate;
                var time2 = ChildSnapshot.val().edate;
//                 console.log('time1', time1)
//                 console.log('time2', time2)

//                 var x = setInterval(function () {
//                     //  var initialDate = new Date().getTime();
//                    // var Distance = Number(time2) - Number(time1);
//                     var Distance= Date.parse(time2) - Date.parse(time1);
//                      // console.log('distance',Distance)
//                       var seconds = Math.floor( (Distance/1000) % 60 );

//   var t = Date.parse(time2) - Date.parse(time1);
//   var seconds = Math.floor( (t/1000) % 60 );
//   var minutes = Math.floor( (t/1000/60) % 60 );
//   var hours = Math.floor( (t/(1000*60*60)) % 24 );
//   var days = Math.floor( t/(1000*60*60*24) );
//   console.log('ttttttttttttttttttttttttttttttttttttttime', days + "d " + hours + "h "
//                          + minutes + "m " + seconds + "s ")


//   return {
//     'total': t,
//     'days': days,
//     'hours': hours,
//     'minutes': minutes,
//     'seconds': seconds
//   };
 

                    // var days = Math.floor(Distance / (1000 * 60 * 60 * 24));
                    // console.log('daysssss', days)
                    // var hours = Math.floor((Distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    // var minutes = Math.floor((Distance % (1000 * 60 * 60)) / (1000 * 60));
                    // var seconds = Math.floor((Distance % (1000 * 60)) / 1000);
                    // console.log('time', days + "d " + hours + "h "
                    //     + minutes + "m " + seconds + "s ")

                //     if (Distance < 0) {
                //         clearInterval(x);
                //         console.log('expired')
                //     }
                // }, 1000);

            }
            )


            console.log("daaaaaaaaaaaaaaa", productData)
            dispatch(ViewproductRequestSuccess(productData))
        })
    }
}



export function ViewProductRequest() {
    return {
        type: Actions.VIEWPRODUCTREQUEST
    }
}


export function ViewproductRequestSuccess(data) {
    return {
        type: Actions.VIEWPRODUCTREQUESTSUCCESS,
        data
    }
}


export function ViewProductRequestFailed() {
    return {
        type: Actions.VIEWPRODUCTREQUESTFAILED
    }
}

export default viewProductRequest;