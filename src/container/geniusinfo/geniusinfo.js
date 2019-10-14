import React, { Component } from 'react'
import { 
    NavBar,
    InputItem,
    TextareaItem,
    Button
} from 'antd-mobile'
import AvatarSelect from '../../components/avatar-select'
import { connect } from 'react-redux'
import { updateValue } from '../../redux/createActions'
import { Redirect } from 'react-router-dom'

class GenuisInfo extends Component {

    constructor(props){
        super(props);
        this.state={
            title:'',
            desc:''
        }
    }

    onChange(key,val){
        this.setState({
            [key]:val
        })
    }

    render() {

        const path = this.props.location.pathname;
        const { redirectTo } = this.props;

        return (
            <div>
                {
                    redirectTo&&redirectTo!==path ? <Redirect to={redirectTo}/> : null
                }
                <NavBar mode="dark">牛人完善信息页面</NavBar>
                <AvatarSelect
                    selectAvatar={ (avaImg)=>{
                        this.setState({
                            avatar: avaImg
                        })
                    } }
                ></AvatarSelect>
                <InputItem
                    onChange = { v=>this.onChange('title',v) }
                >
                    求职岗位
                </InputItem>
                <TextareaItem
                    onChange = { v=>this.onChange('desc',v) }
                    title="个人简介"
                    rows={3}
                    autoHeight={true}
                >
                </TextareaItem>
                <Button
                    onClick = { ()=> this.props.handleSubmitValue(this.state) }
                type='primary'>保存</Button>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        redirectTo: state.User.redirectTo
    }
}

const mapDispatchToProp = dispatch =>{
    return {
        handleSubmitValue(val){
            dispatch(updateValue(val))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProp)(GenuisInfo);
