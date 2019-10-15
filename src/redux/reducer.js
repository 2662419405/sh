import { combineReducers } from 'redux'; 
import User from './user-store'
import { chatuser } from './chat-store'

export default combineReducers({
    User,
    chatuser
})