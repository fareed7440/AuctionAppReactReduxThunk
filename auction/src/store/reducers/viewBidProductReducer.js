import Actions from '../actions/actionTypes'


const initialState = {};

function viewBidProductReducer (state = initialState,action){
    switch(action.type){
        case Actions.VIEWBIDPRODUCTREQUESTSUCCESS:{
            var state1 = Object.assign({},state,{viewBidProduct:action.data})
            state = state1
            return state
        }
          case Actions.ASSIGNREQUESTSUCCESS:{
            var state6 = Object.assign({},state,{productAsign:action.data})
            state = state6
            return state
            }
default:
return state;    
}

}     
export default viewBidProductReducer;