const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getNames('user')
const utility = require('utility')

//进行数据更新
Router.post('/update',(req,res)=>{
    const userid = req.cookies.userid;
    if( !userid ){
        return res.json({code:1})
    }
    const body = req.body;
    User.findByIdAndUpdate(userid,body,function(err,doc){
        const data = Object.assign({},{
            user: doc.user,
            type: doc.type
        },body)
        return res.json({code:0,data})
    })
})

//进行登录
Router.post('/login',(req,res)=>{
    const { user,pwd } = req.body
    User.findOne({user,pwd:md5pwd(pwd)},{pwd:0},(err,doc)=>{
        if(doc){
            res.cookie('userid',doc._id)
            return res.json({code:1,data:doc})
        }else{
            return res.json({code:0,msg:'账户密码错误'})
        }
    })  
})
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

//获取用户列表
Router.get('/list',(req,res)=>{ 

    const { type } = req.query

    User.find({type},(err,doc)=>{
        res.json({code:0,data:doc})
    })
})

//判断是否登录
Router.get('/info',(req,res)=>{
    const { userid } = req.cookies;
    if( !userid ){
        return res.json({code:1})
    }
    User.findOne({_id:userid},(err,doc)=>{
        if(doc){
            return res.json({code:0,data:doc})
        }
    })
})

//加密MD5
function md5pwd(pwd){
    const salt = 'qwe123~~-!@#$%^&&*()sunhang'
    return utility.md5(utility.md5(salt+pwd))
}

module.exports = Router;