import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavBar } from 'antd-mobile'
import NavLinkBar from '../navlink/navlink'
import { Switch,Route } from 'react-router-dom'
import Boss from '../boss/boss'
import Genius from '../genius/genius'
import User from '../user/user'

function Msg(){
    return <h2>msg</h2>
}

class Dashboard extends Component {
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

        return (
            <div>
                <NavBar mode="dark" className="fixed-header">
                    {
                        navList.find(v=>v.path===pathname).title
                    }
                </NavBar>
                <div className="content">
                    <Switch>
                        {
                            navList.map(v=>(
                                <Route path={v.path} key={v.path} component={v.component}></Route>
                            ))
                        }
                    </Switch>
                </div>
                <NavLinkBar data={navList}></NavLinkBar>
            </div>
        )
    }
}

const mapStateToProp = state =>{
    return {
        user: state.User
    }
}

export default connect(mapStateToProp,null)(Dashboard);