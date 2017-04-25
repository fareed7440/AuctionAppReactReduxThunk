import Actions from '../store/actions/actionTypes'
import ViewProduct from '../components/viewproduct'
import { connect } from 'react-redux'
import viewProductRequest from '../store/actions/viewProductAct'

function mapStateToProps(state) {
    console.log("stateeeeeee", state)
    return {
        app: state.ViewProductReducer,
    }
}


function mapDispatchToProps(dispatch) {
    return {

        ViewProductRequest: (productdata) => dispatch(viewProductRequest(productdata)),

    }
}


const ViewProductContainer = connect(mapStateToProps, mapDispatchToProps)(ViewProduct);
export default ViewProductContainer;