import Actions from './actionTypes'
import * as DB from '../../firebase/database'
function asigntRequest(str) {
    return dispatch => {
        dispatch(AssignRequest());
        return DB.database.ref('/BidData').on('value', snap => {
            var biggestNum = 0;
            const todo = [];
            snap.forEach(childSnapshot => {
                var innerTodo = childSnapshot.val()
                var price = parseInt(innerTodo.amount);
                todo.push(price);
                console.log('todpoooooooo', todo);
                for (var i = 0; i < todo.length; i++) {
                    if (todo[i] > biggestNum) {
                        biggestNum = todo[i];
                        console.log("biggestNumber", biggestNum);
                    }
                }

            })
            console.log("22: ", biggestNum);
            biggestNum= biggestNum.toString();
            console.log("gonna be wired", typeof biggestNum);
            const arr =[];
            DB.database.ref('/BidData').orderByChild('amount').equalTo(biggestNum).once('value', biggestAmountSnap => {
            biggestAmountSnap.forEach(objData => {
                var dataInObj = objData.val()
             
                arr.push(dataInObj)
             console.log('ppppppppppppppppppp',arr)
             dispatch(AssignRequestSuccess(arr))
            })
                // var singalObject = biggestAmountSnap.val()
                
                // console.log("biggestAmountSnap", biggestAmountSnap.val());
                 
            })
        });
    }
}



export function AssignRequest() {
    return {
        type: Actions.ASSIGNREQUEST
    }
}


export function AssignRequestSuccess(data) {
    return {
        type: Actions.ASSIGNREQUESTSUCCESS,
        data
    }
}



export default asigntRequest;