# 简招 (React+Node+MongoDB)

> 开始制作的时间是从 2019-10-10 起至今

![sh](http://studyit.club/Study/sh.jpg)

自己也发布过几个小型的demo,虽然没人看(手动滑稽), 但还是喜欢与大家共同学习进步

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

### 数据库方向

- 由于本人主要是面向前端,数据库就是`MongoDB`
- 数据库的使用请参照`data`目录下面的`mongodb.md`
* 数据库方面使用 **(mongoose)**

### 后台方向

- 后台主要使用`node`的`express`

* 后台文件在`server`

### 关于使用

