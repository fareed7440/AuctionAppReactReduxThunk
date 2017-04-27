import loginRequest from '../store/actions/loginAct'
import { connect } from 'react-redux'
import Login from "../components/login"
//import logoutRequest from '../store/actions/logoutAct'
//import Home from '../components/home'
function mapStataToProps(state) {
    return {
        auction: state.LoginReducer,

       // snake: state.LoginReducer.isLogin
    }
    console.log('ghghghghghghgh',state.LoginReducer)
}


function mapDispatchToProps(dispatch) {
    return {
        LoginReq: (data) => dispatch(loginRequest(data)),
        //logoutReq: () => dispatch(logoutRequest())
    }
}


const LoginContainer = connect(mapStataToProps, mapDispatchToProps)(Login);
export default LoginContainer; 