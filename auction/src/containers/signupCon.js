import signupRequest from '../store/actions/signupAct'
import {connect} from 'react-redux'
import Signup from "../components/signup"

function mapStataToProps(state){
    return{
        auction : state.Auction
    }
}


function mapDispatchToProps(dispatch){
    return{
        SignupReq : (data)=>dispatch(signupRequest(data)),
    }
}


const SignupContainer =connect(mapStataToProps,mapDispatchToProps)(Signup);
export default SignupContainer; 