import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, Badge } from 'antd-mobile'

class Msg extends Component {
    getLastArr(arr){
        return arr[arr.length-1]
    }
    render() {
        const msgGroup = {}
        this.props.chat.chatmsg.forEach(v=>{
            msgGroup[v.chatid] = msgGroup[v.chatid] || []
            msgGroup[v.chatid].push(v)
        })
        const userid = this.props.user._id
        const chatList = Object.values(msgGroup).sort((a,b)=>{
            const a_last = this.getLastArr(a).create_time
            const b_last = this.getLastArr(b).create_time
            return b_last - a_last
        })
        const userinfo = this.props.chat.users;

        return (
            <div>
                {
                    chatList.map(v=>{
                    const lastMsg = this.getLastArr(v)
                    const targetId = v[0].form===userid?v[0].to:v[0].form
                    const unreadNum = v.filter(v=>!v.read&&v.to===userid).length
                    if(!userinfo[targetId]){
                        return null
                    } 
                    return (
                        <List key={lastMsg._id}>
                            <List.Item 
                                extra={<Badge text={unreadNum}></Badge>}
                                thumb={require(`../img/${userinfo[targetId].avatar}.png`)}
                                arrow="horizontal"
                                onClick={()=>{
                                    this.props.history.push(`/chat/${targetId}`)
                                }}
                            >
                                {userinfo[targetId].name}
                                <List.Item.Brief>{lastMsg.content}</List.Item.Brief>
                            </List.Item>
                        </List>
                    )})
                }
            </div>
        )
    }
}

const mapStateToProps = state=>{
    return {
        chat: state.chat,
        user: state.User
    }
}

export default connect(mapStateToProps,null)(Msg);
