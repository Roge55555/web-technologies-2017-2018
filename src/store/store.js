import {applyMiddleware, createStore} from "redux";
import {combineReducers} from 'redux'
import thunk from "redux-thunk";
import UserReducer from '../reducers/UserReducer'
import TabsReducer from '../reducers/TabsReducer'

const store = createStore(UserReducer, applyMiddleware(thunk));

export default store;