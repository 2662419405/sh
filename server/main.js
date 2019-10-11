const express = require('express')
const mongoose = require('mongoose')
//数据库的地址
const DB_URL = "mongodb://localhost:27017/sh"
mongoose.connect(DB_URL)
mongoose.connection.on('connected', () => {
    console.log("连接数据库成功")
})
const User = mongoose.model('users', new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
}))

const app = express();
app.get('/data', function (req, res) {
    User.find({
        user: 'sh'
    }, (err, data) => {
        res.json(data)
    })
})

app.listen('9093', () => {
    console.log('服务器运行在9876端口上')
})