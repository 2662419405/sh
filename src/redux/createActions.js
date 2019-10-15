import Axios from "axios"
import { getDirectPath } from '../util'

//更新数据
export function updateValue(val){
    return dispatch=>{
        Axios.post('/user/update',val)
        .then(res=>{
            if(res.status===200&&res.data.code===0){
                dispatch({
                    type:'update_success',
                    value:{
                        ...res.data.data,
                        redirectTo:getDirectPath({type:res.data.data.type,avatar:res.data.data.avatar})
                    }
                })
            }else{
                //注册失败
            }
        })
    }
}

//验证登录状态
export function getCookie(val){
    return {
        type:'cookie',
        value:val.data
    }
}

//登录的dispatch
export function getLogin(val){
    let message = '';
    const { user,pwd } = val;
    if(!user||!pwd){
        message = '用户名密码必须输入'
    }
    if(message!==''){
        return {
            type: 'login',
            value: {
                msg:message
            }
        }
    }else{
        return dispatch=>{
            Axios.post('/user/login',{user,pwd}).then(res=>{
                //登录成功
                if(res.status===200&&res.data.code===1){
                    dispatch({
                        type: 'login',
                        value: {
                            ...res.data.data,
                            redirectTo:getDirectPath({type:res.data.data.type,avatar:res.data.data.avatar}),
                            msg:'',
                            isLogin:true
                        }
                    })
                }else{
                //失败
                    dispatch({
                        type: 'login',
                        value: {
                            isLogin:false,
                            redirectTo: '',
                            msg:res.data.msg
                        }
                    })
                }
            })
        }
    }
}

//注册的dispatch
export function register(val){
    let message = '';
    const { user,pwd,repeatpwd,type } = val
    if(!user||!pwd||!repeatpwd){
        message = '请正确填写信息'
    }
    if(pwd!==repeatpwd){
        message = '两次密码不一致'
    }
    if(message!==''){
        return {
            type: 'addUser',
            value: {
                isLogin:false,
                redirectTo: '',
                msg:message
            }
        }
    }else{
        return dispatch=>{
            Axios.post('/user/register',{user,pwd,type}).then(res=>{
                if(res.status===200&&res.data.code===3){
                    //登录成功
                    dispatch({
                        type: 'addUser',
                        value: {
                            isLogin:true,
                            redirectTo:getDirectPath({type,avatar:null}),
                            msg:res.data.msg,
                            user,
                            pwd,
                            type
                        }
                    })
                }else{
                    if( message ==='' ){
                        message = res.data.msg
                    }
                    //失败
                    dispatch({
                        type: 'addUser',
                        value: {
                            isLogin:false,
                            redirectTo:'',
                            msg: message,
                            name:user,
                            pwd,
                            type
                        }
                    })
                }
            }) 
        }
    }
}