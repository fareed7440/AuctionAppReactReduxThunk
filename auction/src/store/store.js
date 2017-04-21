import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import createLogger  from 'redux-logger'
import MainReducer from './reducers/rootReducer'


const logger = createLogger();
const store = createStore(MainReducer,
applyMiddleware(thunk,logger));
export default store
