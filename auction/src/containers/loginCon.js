import loginRequest from '../store/actions/loginAct'
import {connect} from 'react-redux'
import Login from "../components/login"

function mapStataToProps(state){
    return{
        auction : state.LoginReducer
    }
}


function mapDispatchToProps(dispatch){
    return{
        LoginReq : (data)=>dispatch(loginRequest(data)),
    }
}


const LoginContainer =connect(mapStataToProps,mapDispatchToProps)(Login);
export default LoginContainer ; 