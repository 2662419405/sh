const express = require('express')
const userRouter = require('./user')

const app = express();
app.use('/user',userRouter)

app.listen('9093', () => {
    console.log('服务器运行在9876端口上')
})