import Actions from '../store/actions/actionTypes'
import  ViewBidProduct from '../components/viewBidProduct'
import { connect } from 'react-redux'
import viewBidProductRequest from '../store/actions/viewBidproductAct'
import asigntRequest from '../store/actions/asignProductAct'
function mapStateToProps(state) {
    console.log("email",state)
    return {
        app: state.viewBidProductReducer,
     // currentUserEmail : state.viewBidProductReducer.email
    }

}


function mapDispatchToProps(dispatch) {
    return {

                  ViewBidProductRequest: (productdata) => dispatch(viewBidProductRequest(productdata)),
                 AssignToHiegherBider : ()=> dispatch(asigntRequest())
    }
}


const ViewBidProductContainer = connect(mapStateToProps, mapDispatchToProps)( ViewBidProduct);
export default ViewBidProductContainer;