const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const userRouter = require('./user')
const Model = require('./model')
const Chat = Model.getNames('chat')
const app = express();

const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection',function(socket){
    socket.on('sendMsg',function(data){
        const { form, to, msg } = data;
        const create_time = new Date().getTime();
        const chatid = [form,to].sort().join('_')
        Chat.create({chatid,form,to,content:msg,create_time},function(err,doc){
            io.emit('recvmsg',Object.assign({},doc))
        })
        // console.log(data)
        // io.emit('resMsg',{text:data.text})
    })
})

app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter)

server.listen('9093', () => {
    console.log('服务器运行在9093端口上')
})