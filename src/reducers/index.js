import { combineReducers } from 'redux'
import userReducer from './UserReducer'
import tabsReducer from './TabsReducer'


export default combineReducers({
    user: userReducer,
    tabs: tabsReducer
})
