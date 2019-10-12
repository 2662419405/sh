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
