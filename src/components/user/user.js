import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Result,
    List,
    WhiteSpace,
    Modal
} from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import browserCookie from 'browser-cookies'
import { logoutSubmit } from '../../redux/createActions'

class User extends Component {
    render() {

        const { user } = this.props

        return user.user?(
            <div>
                <Result
                    img={<img src={require(`../img/${user.avatar}.png`)} alt="头像" style={{height:50}} />}
                    title={user.user}
                    message={user.type==='boss'?user.company:null}
                />
                <List
                    renderHeader={()=>'简介'}
                >
                    <List.Item
                        multipleLine
                    >
                        {user.title}
                        {
                            user.desc.split("\n").map((v,index)=>(
                                <List.Item.Brief key={index}>{v}</List.Item.Brief>
                            ))
                        }
                    </List.Item>
                </List>
                <WhiteSpace></WhiteSpace>
                <List>
                    <List.Item
                        onClick={ this.handleLogout }
                    >
                       退出登录
                    </List.Item>
                </List>
            </div>
        ):<Redirect to={user.redirectTo} />
    }

    handleLogout = ()=>{
        const alert = Modal.alert

		alert('注销', '确认退出登录吗???', [
		      { text: '取消', onPress: () => console.log('cancel') },
		      { text: '确认', onPress: () => {
                  browserCookie.erase('userid')
                  this.props.logout()
		      }}
		])
    }
    
}

const mapDispatchToProp = dispatch =>{
    return {
        logout(){
            dispatch(logoutSubmit())
        }
    }
}

const mapStateToProp = state =>{
    return {
        user: state.User
    }
}

export default connect(mapStateToProp,mapDispatchToProp)(User);