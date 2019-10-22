import Axios from 'axios'
import io from 'socket.io-client'
const socket = io('ws://localhost:9093')

//获取聊天列表 
const MSG_LIST = 'MSG_LIST'
//读取信息
const MSG_RECV = 'MSG_RECV'
//表示已读
const MSG_READ = 'MSG_READ'

const initState = {
    chatmsg: [],
    users: {},
    unread: 0,
}

export function chat( state = initState, action ){
    switch( action.type ){
        case MSG_LIST:
            return {...state,users:action.payload.users,chatmsg:action.payload.msgs,unread:action.payload.msgs.filter(v=>!v.read&&v.to===action.payload.userid).length}
        case MSG_RECV:
            const n = action.payload.to === action.userid?1:0
            return {...state,chatmsg:[...state.chatmsg,action.payload],unread:state.unread+n}
        case MSG_READ:
            const { form } = action.payload
            return {...state,unread:state.unread-action.payload.num,chatmsg:state.chatmsg.map(v=>{
                v.read = v.form === form ? true : v.read;
                return v;
            })}
        default: 
            return state
    }
}

function msgList(msgs,users,userid){ 
    return {
        type: MSG_LIST,
        payload: {msgs,users,userid}
    }
}

function revcMsg(data,userid){
    return {
        type: MSG_RECV,
        payload: data._doc,
        userid
    }
}

//接收消息
export function recvMsg(){
    return (dispatch,getState)=>{
        socket.on('recvmsg',function(data){
            const userid = getState().User._id
            console.log("收到的消息"+data)
            dispatch(revcMsg(data,userid))
        })
    }
}

//发送消息
export function sendMsg({form,to,msg}){
    return dispatch=>{
        return socket.emit('sendMsg',{form,to,msg})
    }
}

//获取聊天信息
export function getMsgList(){
    return (dispatch,getState)=>{
        Axios.get('/user/getMsgList')
        .then(res=>{
            if(res.status===200&&res.data.code===0){
                const userid = getState().User._id
                dispatch(msgList(res.data.msgs,res.data.users,userid))
            }
        })
    }
}

function msgRead({form,userid,msg}){
    return {
        type: MSG_READ,
        payload: { form, userid, msg }
    }
}

//更新消息
export function readMsg(form){
    return (dispatch,getState)=>{
        Axios.post('/user/readmsg',{form})
            .then((res)=>{
                const userid = getState().User._id;
                if(res.status === 200 && res.data.code === 0){
                    dispatch(msgRead({userid,form,msg:res.data.num}))
                }
            })
    }
}