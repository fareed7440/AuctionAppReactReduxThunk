import Actions from './actionTypes'
import * as DB from '../../firebase/database'
function viewProductRequest() {
    return dispatch => {
        dispatch(ViewProductRequest());
        return DB.database.ref('/BitProducts').on('value', snap => {
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
            dispatch(ViewproductRequestSuccess(todo))
        });
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



export default viewProductRequest;