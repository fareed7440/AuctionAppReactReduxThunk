import Actions from '../actions/actionTypes'


const initialState = {};

function LogoutReducer(state = initialState,action){
    switch(action.type){
        case Actions.LOGOUTREQUESTSUCCESS:{
            var state4 = Object.assign({},state,{logout:action.data})
            state = state4
            return state
            }
default:
return state;    
}

}     
export default LogoutReducer;