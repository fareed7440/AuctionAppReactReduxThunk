import {combineReducers} from 'redux'
import SignupReducer from './signupReducer'
import LoginReducer from './loginReducer'

const MainReducer  = combineReducers(
    {
        Auction :SignupReducer,
LoginReducer
    }
)

export default MainReducer