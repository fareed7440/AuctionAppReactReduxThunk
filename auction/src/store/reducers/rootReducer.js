import { combineReducers } from 'redux'
import SignupReducer from './signupReducer'
import LoginReducer from './loginReducer'
import LogoutReducer from './logoutReducer'
const MainReducer = combineReducers(
    {
        Auction: SignupReducer,
        LoginReducer,
        LogoutReducer
    }
)

export default MainReducer