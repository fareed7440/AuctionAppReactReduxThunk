import { combineReducers } from 'redux'
import SignupReducer from './signupReducer'
import LoginReducer from './loginReducer'
import LogoutReducer from './logoutReducer'
import AddProductReducer from './addproductReducer'
import  UserReducer from './getUserReducer'
import ViewProductReducer from './viewProductReducer'
import BitReducer from './bitReducer'
import AddBitReducer from './addBidreducer'
const MainReducer = combineReducers(
    {
        Auction: SignupReducer,
        LoginReducer,
        LogoutReducer,
        AddProductReducer,
        ViewProductReducer,
        BitReducer,
        UserReducer,
        AddBitReducer
    }
)

export default MainReducer