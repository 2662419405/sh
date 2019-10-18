import { combineReducers } from 'redux'; 
import User from './user-store'
import { chatuser } from './chat-store'
import { chat } from './chat-redux'

export default combineReducers({
    User,
    chatuser,
    chat
})