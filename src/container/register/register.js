import React, { Component, Fragment } from 'react';
import Logo from '../../components/logo/logo'
import { InputItem, List, Radio, WhiteSpace , Button } from 'antd-mobile'
import './style.css'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { register } from '../../redux/createActions'

class Register extends Component{

    constructor(props){
        super(props);
        this.state = {
            user:'',
            pwd:'',
            repeatpwd:'',
            type:'genius'
        }
    }

    handleChange = (key,val)=>{
        this.setState({
            [key]:val
        })
    }

    render(){

        let { msg,redirectTo } = this.props;
        const RadioItem = Radio.RadioItem; 

        return(
            <Fragment>
                {
                    redirectTo ? <Redirect to={redirectTo}/> : null
                }
                <Logo />
                <p className="msg">{msg}</p>
                <List>
                    <InputItem
                        onChange={v=>this.handleChange('user',v)}
                    >用户名</InputItem>
                    <WhiteSpace />
                    <InputItem
                        onChange={v=>this.handleChange('pwd',v)}
                    type="password">密码</InputItem>
                    <WhiteSpace />
                    <InputItem
                        onChange={v=>this.handleChange('repeatpwd',v)}
                    type="password">确认密码</InputItem>
                    <WhiteSpace />
                    <h4>请选择你的职位:</h4>
                    <WhiteSpace />
                    <RadioItem
                        onChange={()=>{this.handleChange('type','genius')}}
                    checked={this.state.type === 'genius'}>
                        牛人
                    </RadioItem>
                    <RadioItem
                            onChange={()=>{this.handleChange('type','boss')}}
                        checked={this.state.type === 'boss'}>
                        BOSS
                    </RadioItem>
                    <WhiteSpace />
                    <Button
                        onClick={()=>{this.props.handleRegisterValue(this.state)}}
                        type="primary">注册</Button>
                    <WhiteSpace />
                </List>
            </Fragment>
        )
    }

}

const mapDispatchToProps = dispatch =>{
    return {
        handleRegisterValue(val){
            dispatch(register(val))
        }
    }
}

const mapStateToProps = state =>{
    return {
        msg: state.User.msg,
        redirectTo: state.User.redirectTo
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);