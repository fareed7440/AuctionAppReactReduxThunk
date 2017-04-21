import loginRequest from '../store/actions/loginAct'
import {connect} from 'react-redux'
import Login from "../components/login"
import logoutRequest from '../store/actions/logoutAct'
function mapStataToProps(state){
    return{
        auction : state.LoginReducer,
        app : state.LogoutReducer
    }
}


function mapDispatchToProps(dispatch){
    return{
        LoginReq : (data)=>dispatch(loginRequest(data)),
        LogoutRequest : ()=>dispatch(logoutRequest())
    }
}


const LoginContainer =connect(mapStataToProps,mapDispatchToProps)(Login);
export default LoginContainer ; 