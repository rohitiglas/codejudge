import {createStore, combineReducers,applyMiddleware} from 'redux';
// import { createLogger } from 'redux-logger';
import AuthReducer from './reducers/MyReducer';






import thunk from 'redux-thunk';




export default createStore(
    AuthReducer,
    applyMiddleware(thunk)
);