import { Component } from 'react'
import axios from 'axios'
import {withRouter} from "react-router-dom";
import { connect } from 'react-redux'
import { getCookie } from '../../redux/createActions'

class AutoComponent extends Component {

    componentDidMount(){
        const publicList = ['/login','/register']
        const pathname = this.props.location.pathname
        if(publicList.indexOf(pathname)>-1){
            return  null;
        }
        axios.get('/user/info').then(res=>{
            if(res.status===200){
                if(res.data.code===0){
                    // 0 代表登录了
                    this.props.loadData(res.data)
                }else{
                    // 1 代表没有登录
                    this.props.history.push('/login')
                }
            }
        })
    }

    render() {
        return null
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        loadData(val){
            dispatch(getCookie(val));
        }
    }
}

export default connect(null,mapDispatchToProps)(withRouter(AutoComponent));