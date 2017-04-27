import Actions from '../store/actions/actionTypes'
import BitProduct from '../components/bitproduct'
import { connect } from 'react-redux'
import viewBitRequest from '../store/actions/bitproductAct'
import UserDetail from '../store/actions/getUserDetail'
import addBid  from '../store/actions/addBidAct'
function mapStateToProps(state) {
    console.log("stateeeeeee", state)
    return {
        bit : state.BitReducer,
        looooooog : state.UserReducer,
        bidd : state.AddBitReducer
    }
}


function mapDispatchToProps(dispatch) {
    return {
        users : ()=> dispatch(UserDetail()),
        ViewBitRequest: (id) => dispatch(viewBitRequest(id)),
        AddBidRequest : (bidData)=> dispatch(addBid (bidData))
    }
}


const BitProductContainer = connect(mapStateToProps, mapDispatchToProps)(BitProduct);
export default BitProductContainer;