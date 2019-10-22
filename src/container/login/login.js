import React, { Component, Fragment } from 'react';
import Logo from '../../components/logo/logo'
import { Button, List, InputItem, WingBlank, WhiteSpace } from 'antd-mobile'
import { connect } from 'react-redux'
import { getLogin } from '../../redux/createActions'
import { Redirect } from 'react-router-dom'
import shForm from '../../components/shForm/shForm'

class Login extends Component{

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
                        onChange={v=>this.props.handleChange('user',v)}
                    >用户名</InputItem>
                    <WhiteSpace />
                    <InputItem
                        onKeyUp={(e)=>{
                            if(e.keyCode===13){
                                handlerLogin(this.props.state)
                            }
                        }}
                        onChange={v=>this.props.handleChange('pwd',v)}
                    type="password">密码</InputItem>
                </List>
                <WhiteSpace />
                <WingBlank>
                    <Button
                        onClick={()=>{handlerLogin(this.props.state)}}
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

export default shForm(connect(mapStateToProps,mapDispatchToProps)(Login));