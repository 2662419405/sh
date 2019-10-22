import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavBar } from 'antd-mobile'
import NavLinkBar from '../navlink/navlink'
import { Route, Redirect } from 'react-router-dom'
import Boss from '../boss/boss'
import Genius from '../genius/genius'
import User from '../user/user'
import { getMsgList, recvMsg } from '../../redux/chat-redux' 
import Msg from '../msg/msg'
import QueueAnim from 'rc-queue-anim';

class Dashboard extends Component {

    componentDidMount(){
        if(!this.props.chat.chatmsg.length){
            this.props.getList();
            this.props.pullMsg();
        }
    }

    render() {

        const { pathname } = this.props.location
        const user = this.props.user
        const navList = [
            {
                path: '/boss',
                text: '牛人',
                icon: 'boss',
                title: '牛人列表',
                component: Genius ,
                hide: user.type==='genius'
            },
            {
                path: '/genius',
                text: 'Boss',
                icon: 'job',
                title: 'Boss列表',
                component: Boss ,
                hide: user.type==='boss'
            },
            {
                path: '/msg',
                text: '消息',
                icon: 'msg',
                title: '消息列表',
                component: Msg 
            },
            {
                path: '/me',
                text: '我',
                icon: 'user',
                title: '个人中心',
                component: User
            }
        ]
        const page = navList.find(v=>v.path===pathname)
        return page?(
            <div>
                <NavBar mode="dark" className="fixed-header">
                    {
                        navList.find(v=>v.path===pathname).title
                    }
                </NavBar>
                <div className="content">
                    <QueueAnim type="alpha" duration={800}>
                        <Route path={page.path} key={page.path} component={page.component}></Route>
                    </QueueAnim>
                </div>
                <NavLinkBar data={navList}></NavLinkBar>
            </div>
        ):<Redirect to='/login'></Redirect>
    }
}

const mapStateToProp = state =>{
    return {
        user: state.User,
        chat: state.chat
    }
}

const mapDispatchToProp = dispatch =>{
    return {
        getList(){
            dispatch(getMsgList())
        },
        pullMsg(){
            dispatch(recvMsg())
        }
    }
}

export default connect(mapStateToProp,mapDispatchToProp)(Dashboard);