import Actions from './actionTypes'
import * as DB from '../../firebase/database'
function asigntRequest(str) {
    return dispatch => {
        dispatch(AssignRequest());
        return DB.database.ref('/BidData').on('value', snap => {
            const todo = [];
            snap.forEach(childSnapshot => {
                var innerTodo = childSnapshot.val()
                var price = parseInt(innerTodo.amount);
                todo.push(price)
                console.log('todpoooooooo', todo)
                var biggestNum = 0;
                for (var i = 0; i < todo.length; i++) {
                    if (todo[i] > biggestNum) {
                        biggestNum = todo[i];
                    }
                }
                console.log("biggggggggggggggggggggg",biggestNum);
            dispatch(AssignRequestSuccess(biggestNum))
            })
            
        });
    }
}



export function AssignRequest() {
    return {
        type: Actions.VIEWPRODUCTREQUEST
    }
}


export function AssignRequestSuccess(data) {
    return {
        type: Actions.VIEWPRODUCTREQUESTSUCCESS,
        data
    }
}



export default asigntRequest;