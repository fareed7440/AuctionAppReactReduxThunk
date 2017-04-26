import Actions from '../actions/actionTypes'


const initialState = {};

function UserReducer(state = initialState,action){
    switch(action.type){
        case Actions.LOGINREQUESTSUCCESS:{
            var state6 = Object.assign({},state,{user:action.data})
            state = state6
            return state
            }
default:
return state;    
}

}     
export default UserReducer;
