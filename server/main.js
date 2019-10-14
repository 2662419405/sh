const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const userRouter = require('./user')
const app = express();
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter)

app.listen('9093', () => {
    console.log('服务器运行在9093端口上')
})