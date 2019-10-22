import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React, { Component,Fragment } from 'react'
import Login from './container/login/login'
import Register from './container/register/register'
import AutoRouter from './components/autoRouter/index'
import BossInfo from './container/bossinfo/index'
import GenuisInfo from './container/geniusinfo/geniusinfo'
import Dashboard from './components/Dashboard/Dashboard'
import Chat from './components/chat/chat'

class Router extends Component{

    constructor(props){
        super(props);
        this.state={
            hasError: false
        }
    }

    componentDidCatch(err,info){
        this.setState({
            hasError: true
        })
    }

    render(){
        return this.state.hasError?<h2>页面出错了</h2>:(
            <BrowserRouter>
                <Fragment>
                    {/* {验证是否登录,是牛人还是BOSS} */}
                    <AutoRouter />
                    <Switch>
                        <Route path='/geniusinfo' component={GenuisInfo} />
                        <Route path='/bossinfo' component={BossInfo} />
                        <Route path='/login' component={Login}></Route>
                        <Route path='/register' component={Register}></Route>
                        <Route path='/chat/:user' component={Chat}></Route>
                        <Route component={Dashboard}></Route>
                    </Switch>
                </Fragment>
            </BrowserRouter>
        )
    }

}

export default Router;