import Actions from '../actions/actionTypes'


const initialState = {};

function AddBidReducer(state = initialState,action){
    switch(action.type){
        case Actions.ADDBIDDINGREQUEST:{
            var state9 = Object.assign({},state,{addBid:action.data})
            state = state9
            return state;
        }
        
        
default:
return state;   
}

}   



export default AddBidReducer;