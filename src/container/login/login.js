import React, { Component, Fragment } from 'react';
import Logo from '../../components/logo/logo'
import { Button, List, InputItem, WingBlank, WhiteSpace } from 'antd-mobile'

class Login extends Component{
    render(){
        return(
            <Fragment>
                <Logo />
                <List>
                    <InputItem>用户名</InputItem>
                    <WhiteSpace />
                    <InputItem type="password">密码</InputItem>
                </List>
                <WhiteSpace />
                <WingBlank>
                    <Button type="primary">登录</Button>
                    <WhiteSpace />
                    <Button
                        onClick={this.handlerRegister}
                    type="primary">注册</Button>
                </WingBlank>
            </Fragment>
        )
    }

    handlerRegister = ()=>{
        this.props.history.push('/register')
    }

}

export default Login;