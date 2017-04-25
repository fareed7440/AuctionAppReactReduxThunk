import { combineReducers } from 'redux'
import SignupReducer from './signupReducer'
import LoginReducer from './loginReducer'
import LogoutReducer from './logoutReducer'
import AddProductReducer from './addproductReducer'
import ViewProductReducer from './viewProductReducer'
import BitReducer from './bitReducer'
const MainReducer = combineReducers(
    {
        Auction: SignupReducer,
        LoginReducer,
        LogoutReducer,
        AddProductReducer,
        ViewProductReducer,
        BitReducer
    }
)

export default MainReducer