import loginRequest from '../store/actions/loginAct'
import { connect } from 'react-redux'
import Login from "../components/login"
import ViewBidProduct from '../components/viewBidProduct'
import viewBidProductRequest from '../store/actions/viewBidproductAct'
import fbloginRequest from '../store/actions/fbloginAct'
//import logoutRequest from '../store/actions/logoutAct'
//import Home from '../components/home'
function mapStataToProps(state) {
      console.log('ghghghghghghgh',state.UserReducer)
    return {
        auction: state.LoginReducer,
        currentUserEmail : state.UserReducer
       // snake: state.LoginReducer.isLogin
    }
}


function mapDispatchToProps(dispatch) {
    return {
        LoginReq: (data) => dispatch(loginRequest(data)),
        //logoutReq: () => dispatch(logoutRequest())
          emailCurent : ()=> dispatch(viewBidProductRequest()),

          fbLoginReq : ()=>dispatch(fbloginRequest())
    }
}


const LoginContainer = connect(mapStataToProps, mapDispatchToProps)(Login);
export default LoginContainer; 