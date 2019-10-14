const mongoose = require('mongoose')

//数据库的地址
const DB_URL = "mongodb://localhost:27017/sh"
mongoose.connect(DB_URL)

const models = {
    user: {
        'user': {type:String, require:true},
        'pwd': {type:String, require:true},
        'type': {type:String, require:true},
        //头像
        'avatar': {type:String},
        //个人简介
        'desc': {type:String},
        //职位名
        'title':{type:String},
        //如果是boss,还会有两个字段
        'company':{type:String},
        'money':{type:String}
    },
    chat:{

    }
}

for( let m in models ){
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getNames:function(name){
        return mongoose.model(name)
    }
}