import {applyMiddleware, createStore} from "redux";
import {combineReducers} from 'redux'
import thunk from "redux-thunk";
import reducerUser from './ReducerUser'
import reducerOrgs from './ReducerOrgs'
import reducerTextArea from './ReducerTextArea'
import reducerRepos from './ReducerRepos'
import reducerFollowers from './ReducerFollowers'

const reduser = combineReducers({reducerUser,reducerOrgs,reducerTextArea,reducerRepos,reducerFollowers})
const store = createStore(reduser, applyMiddleware(thunk));

export default store;