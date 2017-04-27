import Actions from '../actions/actionTypes'


const initialState = {};

function BitReducer(state = initialState,action){
    switch(action.type){
        case Actions.BIDDINREQUESTSUCCESS:{
            var state3 = Object.assign({},state,{bidding:action.data})
            state = state3
            return state;

        }
        
default:
return state;    
}

}     
export default BitReducer;
