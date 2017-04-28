import Actions from './actionTypes'
import * as DB from '../../firebase/database'
function viewBidProductRequest(user) {
    return dispatch => {
console.log('uuuuuuuuuuuuuuuuuu',user)
        dispatch(ViewBidProductRequest());
        return DB.database.ref('/BidData').on('value', snap => {
            const todo = [];
            snap.forEach(childSnapshot => {
                var innerTodo = childSnapshot.val();
                innerTodo.key = childSnapshot.key;
                if (childSnapshot.hasChild('comments')) {
                    var customComments = Object.keys(childSnapshot.val().comments).map(key => { return { key: childSnapshot.val().comments[key] } })
                    console.log(customComments);
                    innerTodo.comments = customComments;
                    todo.push(innerTodo);
                } else {
                    todo.push(innerTodo);
                }
            })
            dispatch(ViewBidproductRequestSuccess(todo))
        });
    }
}



export function ViewBidProductRequest() {
    return {
        type: Actions.VIEWBIDPRODUCTREQUEST
    }
}


export function ViewBidproductRequestSuccess(data) {
    return {
        type: Actions.VIEWBIDPRODUCTREQUESTSUCCESS,
        data
    }
}



export default viewBidProductRequest;