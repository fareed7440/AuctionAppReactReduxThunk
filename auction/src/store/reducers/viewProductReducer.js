import Actions from '../actions/actionTypes'


const initialState = {};

function ViewProductReducer(state = initialState,action){
    switch(action.type){
        case Actions.VIEWPRODUCTREQUESTSUCCESS:{
            var state8 = Object.assign({},state,{viewProduct:action.data})
            state = state8
            return state
        }
        case Actions.BIDDINREQUESTSUCCESS:{
            var state3 = Object.assign({},state,{bidding:action.data})
            state = state3
            return state;

            }
default:
return state;    
}

}     
export default ViewProductReducer;