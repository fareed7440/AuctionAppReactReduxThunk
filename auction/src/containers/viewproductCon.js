import Actions from '../store/actions/actionTypes'
import ViewProduct from '../components/viewproduct'
import { connect } from 'react-redux'
import viewProductRequest from '../store/actions/viewProductAct'
import viewBitRequest from '../store/actions/bitproductAct'
function mapStateToProps(state) {
    console.log("stateeeeeee", state)
    return {
        app: state.ViewProductReducer,
       bitt : state.ViewProductReducer
    }
     console.log("state of a container",state);
}


function mapDispatchToProps(dispatch) {
    return {

        ViewProductRequest: (productdata) => dispatch(viewProductRequest(productdata)),
            bittingData: (bitdata) => dispatch(viewBitRequest(bitdata)),
    }
}


const ViewProductContainer = connect(mapStateToProps, mapDispatchToProps)(ViewProduct);
export default ViewProductContainer;