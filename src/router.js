import { BrowserRouter, Route } from 'react-router-dom'
import React, { Component,Fragment } from 'react'
import Login from './container/login/login'
import Register from './container/register/register'
import AutoRouter from './components/autoRouter/index'

class Router extends Component{

    render(){
        return(
            <BrowserRouter>
                <Fragment>
                    {/* {验证是否登录,是牛人还是BOSS} */}
                    <AutoRouter />
                    <Route path='/login' component={Login}></Route>
                    <Route path='/register' component={Register}></Route>
                </Fragment>
            </BrowserRouter>
        )
    }

}

export default Router;