import Actions from '../actions/actionTypes'


const initialState = {};

function ViewProductReducer(state = initialState,action){
    switch(action.type){
        case Actions.VIEWPRODUCTREQUESTSUCCESS:{
            var state8 = Object.assign({},state,{viewProduct:action.data})
            state = state8
            return state
            }
default:
return state;    
}

}     
export default ViewProductReducer;