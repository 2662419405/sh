import React, { Component, Fragment } from 'react';
import Logo from '../../components/logo/logo'
import { Button, List, InputItem, WingBlank, WhiteSpace } from 'antd-mobile'
import { connect } from 'react-redux'
import { getLogin } from '../../redux/createActions'
import { Redirect } from 'react-router-dom'

class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            user:'',
            pwd:''
        }
    }

    handleChange = (key,val)=>{
        this.setState({
            [key]:val
        })
    }

    render(){

        const { redirectTo, msg, handlerLogin } = this.props;

        return(
            <Fragment>
                {
                    redirectTo ? <Redirect to={redirectTo}/> : null
                }
                <Logo />
                <p style={{color:'red',textAlign:'center'}}>{msg}</p>
                <List>
                    <InputItem
                        onChange={v=>this.handleChange('user',v)}
                    >用户名</InputItem>
                    <WhiteSpace />
                    <InputItem
                        onChange={v=>this.handleChange('pwd',v)}
                    type="password">密码</InputItem>
                </List>
                <WhiteSpace />
                <WingBlank>
                    <Button
                        onClick={()=>{handlerLogin(this.state)}}
                    type="primary">登录</Button>
                    <WhiteSpace />
                    <Button
                        onClick={this.handleRegister}
                    type="primary">注册</Button>
                </WingBlank>
            </Fragment>
        )
    }

    handleRegister = ()=>{
        this.props.history.push('/register')
    }

}

const mapDispatchToProps = dispatch =>{
    return {
        handlerLogin(val){
            dispatch(getLogin(val))
        }
    }
}

const mapStateToProps = state =>{
    return {
        msg: state.User.msg,
        redirectTo: state.User.redirectTo
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);