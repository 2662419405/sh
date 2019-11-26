# 简招 (React+Node+MongoDB)

> 开始制作的时间是从 2019-10-10 起至今

![sh](http://studyit.club/Study/sh.jpg)

自己也发布过几个小型的demo,虽然没人看(๑•ૅૄ•๑), 但还是喜欢与大家共同学习进步

测试网址 --------->  [网址](http://shtodream.cn:9093)

<p align="center" style="margin:50px 0;">
	<img src="https://img.shields.io/badge/language-html%20%7C%20javascript-blue" />
    <img src="https://img.shields.io/badge/build-passing-green"  />
    <img src="https://img.shields.io/badge/version-v1.0-informational" />
    <img src="https://img.shields.io/badge/codecov-25-red" />
    <img src="https://img.shields.io/badge/platform-ios%20%7C%20android%20%7C%20widdow%20%7C%20ipad-inactive"  />
    <img src="https://img.shields.io/badge/weibo-%40SH-blueviolet"  />
</p>

### 介绍

校园招聘`APP`,是一款手机端的求职网站,招聘者可以注册为BOSS,求职者可以注册为牛人,牛人和BOSS可以聊天,并且可以互相查看到对方的基本信息和简介薪资等方面

计划制作:

- 使用React的`Antd-mobile`支持手机端端制作
- `ReactNative`独立开发`App`端和`IOS`
- 有人肯定会很好奇,PC和手机为何要制作两次,主要是本人很萌新,想要学习更多的框架

> 只有学习更多的框架,并且锻炼更好的自学能力,才能更上一层楼

### 关于我

我是一个__热门计算机__并且__对计算机充满兴趣__的程序员

学过`Java`,`.net`,`PHP`,曾经一度认为`PHP`是最牛逼的语言

后来正式的接触前端,学习过

- `ES6`
- `Node`
- `React`
- `Vue`
- `ReactNative`
- `Angular`
- 微信一系列开发
- `jq`,`bootstarp`等一些简单库

发现前端很神奇,比后台和数据方面更加的有意思,想要称为一名前端工程师

### 项目简述

> 这是一个React项目,你的电脑要具备Node(8.0)以上
#### 所使用的node包技术阐述

![sh](http://studyit.club/Study/Snipaste_2019-10-24_11-25-04.png)

> 前端主要采用了React全家桶，没什么多说的，脚手架构建项目，react-router控制路由，axios进行前后端交互。后端是基于node搭的服务，用的是express。我为什么不用koa呢，纯粹是图方便，因为koa不熟（捂脸）。聊天最重要的当然是通信，项目用[socket.io](https://www.w3cschool.cn/socket/socket-1olq2egc.html)来进行前后端通信。



*=============分割线  下面是每个包的详细解释===============*



* **(按需加载问题)** 使用`babel-plugin-import`包

* **(由于跨域问题)** 在`package.json`中使用`proxy`配置

  * 需要详细说明一下,安装完这个包,需要在`package.json`文件中配置

  * ```js
    "proxy": "http://localhost:9093"
    ```

* **(关于密码加密问题)** 使用`utility`包

* **(关于cookie存储方面的问题)** 使用`browser-cookies`包

* **(方面node中获取请求的数据)** 使用`body-parser`包

* **(在React中发送请求)** 使用`axios`包

* **(加强react中组件之间的通信类型)** 使用`prop-types`包

* **(React和Redux之间的数据通信)** 使用`react-redux`包

* **(React中的路由配置)** 使用`react-router`包

* **(React中的动画)** 使用`rc-queue-anim`包

* **(关于Redux的装饰器)**使用`babel-plugin-transform-decorators-legacy`包

  * 这里需要详细说明一下,安装完这个包之后,需要在`package.json`文件中中babel上加入

  * `"plugins": ["transform-decorators-legacy"]`

  * ```json
    "babel": {
        "presets": [
            "react-app"
        ],
        "plugins": [
            "transform-decorators-legacy"
        ]
    },
    ```
  
* **(配置服务端渲染)** 使用`babel-cli`包

  * 安装

  * ```js
    npm install babel-cli --save 
    ```

  * 配置package.json

  * ```js
    "server": "set NODE_ENV=test&&nodemon --exec babel-node -- server/main.js"
    ```



* 目录结构

```js
    // 项目结构
    ├─build
    ├─config
    ├─data
    │  ├─MongoDB            				  // 数据库解释    
    ├─server  								  // 后台
    │  ├─model          					  // 数据库原型     
    │  ├─main          				  		  // 后台文件入口  
    │  ├─user          				 		  // 后台接口api    
    ├─src
    │  ├─components                           // 全局组件
    │  │  ├─autoRouter
    │  │  ├─avatar-select
    │  │  ├─boss
    │  │  ├─chat
    │  │  ├─Dashboard
    │  │  ├─genius
    │  │  ├─img
    │  │  ├─logo
    │  │  ├─msg
    │  │  ├─navlink
    │  │  ├─shForm
    │  │  ├─user
    │  │  └─chatCard
    │  ├─router                                // 路由
    │  ├─index                                 // 入口	
    │  ├─util                                  // 方法
    │  ├─config                                // 请求拦截
    │  └─container
    │      ├─bossinfo   					   // boss
    │      ├─login          				   // 登录
    │      ├─register                          // 注册
    │      └─genuisinfo                        // 牛人

```



> 注册时, 进行密码MD5加密



``` js
// md5加密
function md5pwd(pwd){
    const salt = 'qwe123~~-!@#$%^&&*()sunhang'
    return utility.md5(utility.md5(salt+pwd))
}
```



> 进行登录以及cookie的存储



```js
//进行注册
Router.post('/register',(req,res)=>{
    const { user,pwd,type } = req.body
    User.findOne({user},(err,doc)=>{
        if(doc){
            return res.json({code:1,msg:'用户名存在'})
        }
        const userModel = new User({user,type,pwd:md5pwd(pwd)})
        userModel.save(function(e,d){
            if(err){
                return res.json({code:2,msg:'后端出错了'})
            }
            const {user,type,_id} = d
            res.cookie('userid',_id)
            return res.json({code:3,msg:'注册成功',data:{user,type,_id}})
        })
    })
})
```



> axios拦截器的制作



```js
import axios from 'axios'
import { Toast } from 'antd-mobile'

//拦截请求
axios.interceptors.request.use(function(config){
    Toast.loading('加载中',0);
    return config;
})

//拦截响应
axios.interceptors.response.use(function(config){
    Toast.hide();
    return config;
})
```



* 登录和注册效果展示

![sh](http://studyit.club/Study/register.gif)

* 双方聊天展示

![sh](http://studyit.club/Study/chat.gif)



* 消息的更新和排序

![sh](http://studyit.club/Study/clear.gif)



* 手机端表情包展示

![sh](http://studyit.club/Study/Screenshot_2019-10-24-14-14-39-53_cb819d8fa60af39.jpg)

> 手机端的表情包就是可以用的,现在的表情包都可以直接使用了,不同代码了,很神奇



### 后台方向

- 由于本人主要是面向前端,数据库就是`MongoDB`
- 数据库的使用请参照`data`目录下面的`mongodb.md`
* 数据库方面使用 **(mongoose)**

- 后台主要使用`node`的`express`

* 后台文件在`server`



# 使用方式

* 需要电脑有 mongo 和 react 还有node环境

* 首先:下载本项目

* ```js
  // 第一种方式
  npm install //安装包依赖
  npm run build //打包项目
  npm run server //启动  打开浏览器输入localhost:9093
  ```

* ```js
  // 第二种方式
  npm install //安装包依赖
  cd server  //进入后台
  node main.js  //运行后台
  //再打开一个cmd
  npm run start //启动  打开浏览器输入localhost:3000
  ```


如果还有bug和建议,欢迎告诉我  (͏ ˉ ꈊ ˉ)✧˖°

![sh](http://studyit.club/Study/qq.jpg)



>  一开始还是遇到了很多的坑,第一次使用antd-mobile这个库,最主要的坑,还是对于项目的上线运行,毕竟个人不太擅长服务器的使用,在配置Nginx的时候卡了很久,为了性能优化,SSR渲染也是花了很大的心血,感觉里面的坑太多了,总的来说收获还是很大的,后期我还会画时间进行界面上的美化
>
> 感觉支持  喜欢的朋友记得给个star  