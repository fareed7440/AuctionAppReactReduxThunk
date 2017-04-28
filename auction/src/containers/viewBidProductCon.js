import Actions from '../store/actions/actionTypes'
import  ViewBidProduct from '../components/viewBidProduct'
import { connect } from 'react-redux'
import viewBidProductRequest from '../store/actions/viewBidproductAct'
function mapStateToProps(state) {
    console.log("email",state)
    return {
        app: state.viewBidProductReducer,
       currentUserEmail : state.userReducer
    }

}


function mapDispatchToProps(dispatch) {
    return {

                  ViewBidProductRequest: (productdata) => dispatch(viewBidProductRequest(productdata)),
                  // CurrentUserEmail : (user)=> (viewBidProductRequest(user))
    }
}


const ViewBidProductContainer = connect(mapStateToProps, mapDispatchToProps)( ViewBidProduct);
export default ViewBidProductContainer;