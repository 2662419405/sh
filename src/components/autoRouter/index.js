import { Component } from 'react'
import axios from 'axios'
import {withRouter} from "react-router-dom";

class AutoComponent extends Component {

    componentDidMount(){
        const publicList = ['/login','/register']
        const pathname = this.props.location.pathname
        if(publicList.indexOf(pathname)>-1){
            return  null;
        }
        axios.get('/user/info').then(res=>{
            if(res.status===200){
                if(res.data===1){
                    // 1 代表登录了
                }else{
                    // 0 代表没有信息
                    this.props.history.push('/login')
                }
            }
        })
    }

    render() {
        return null
    }
}

export default withRouter(AutoComponent);