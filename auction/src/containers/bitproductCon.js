import Actions from '../store/actions/actionTypes'
import BitProduct from '../components/bitproduct'
import { connect } from 'react-redux'
import viewBitRequest from '../store/actions/bitproductAct'

function mapStateToProps(state) {
    console.log("stateeeeeee", state)
    return {
        bit : state.BitReducer
    }
}


function mapDispatchToProps(dispatch) {
    return {

        ViewBitRequest: (id) => dispatch(viewBitRequest(id)),
        
    }
}


const BitProductContainer = connect(mapStateToProps, mapDispatchToProps)(BitProduct);
export default BitProductContainer;