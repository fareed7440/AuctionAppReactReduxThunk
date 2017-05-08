import Actions from '../actions/actionTypes'


const initialState = {};

function LoginReducer(state = initialState,action){
    switch(action.type){
        case Actions.LOGINREQUESTSUCCESS:{
            var state2 = Object.assign({},state,{login:action.data})
            state = state2
            return state
        }
        
           case Actions.FBLOGINREQUESTSUCCESS:{
            var state2 = Object.assign({},state,{fblogin:action.data})
            state = state2
            return state
            }
default:
return state;    
}

}     
export default LoginReducer;
