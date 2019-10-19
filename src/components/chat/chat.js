import React, { Component } from 'react'
import {
    List,
    InputItem,
    NavBar,
    Icon,
    Grid
} from 'antd-mobile'
import { connect } from 'react-redux'
import { getMsgList, sendMsg, recvMsg, readMsg } from '../../redux/chat-redux' 
import { getChatId } from '../../util';

class Chat extends Component {

    constructor(props){
        super(props);
        this.state={
            text: ''
        }
    }

    componentDidMount(){
        if(!this.props.chat.chatmsg.length){
            this.props.getList();
            this.props.pullMsg();
        }
    }

    componentWillUnmount(){
        const to = this.props.match.params.user
        this.props.readMsg(to);
    }

    fixPao(){
        setTimeout(function(){
            window.dispatchEvent(new Event('resize'))
        },0)
    }

    handleSubmit = ()=>{
        const form = this.props.user._id
        const to = this.props.match.params.user
        const msg = this.state.text
        this.props.sendmsg({form,to,msg})
        this.setState({
            text:'',
            showEmoji:false
        })
    }

    render() {
        const emoji = '😂 😐 😶 😏 😣 😥 😳 😵 😡 😠 💪 👈 👉 ☝ 👆 👇 ✌ ✋ 👌 👍 👎 ✊ 👊 👋 👏 👐 ✍ ✈ ⌛ ⏳ ⌚ ⏰ ☎ ✉ ✏ ✒ ✂ ☠ ♠ ♥ ♦ ♣ ♨ ✡ ✝'
                        .split(' ')
                        .filter(v=>v)
                        .map(v=>({text:v}))

        const user = this.props.match.params.user
        const Item = List.Item
        const users = this.props.chat.users
        if(!users[user]){
            return null;
        }
        const chatid = getChatId(user,this.props.user._id)
        const chatmsgs = this.props.chat.chatmsg.filter(v=>v.chatid===chatid)
        return (
            <div id="chat-page">   
                <NavBar mode="dark" icon={<Icon type="left" />} onLeftClick={()=>{
                    this.props.history.goBack()
                }}>
                    {users[user].name}
                </NavBar>

                {
                    chatmsgs.map(v=>{
                        const avatar = require(`../img/${users[v.form].avatar}.png`)
                        return v.form===user?(
                            <List key={v._id}>
                                <Item
                                    thumb={avatar}
                                >{v.content}</Item>
                            </List>
                        ):(
                            <List key={v._id}>
                                <Item 
                                    extra={<img alt="头像" src={avatar} />}
                                    className="chat-me"
                                >{v.content}</Item>
                            </List>
                        )
                    })
                }
                <div
                    className='stick-footer'
                >
                    <List>
                        <InputItem
                            placeholder="请输入聊天内容"
                            value={this.state.text}
                            onChange={(v)=>this.setState({
                                text:v
                            })}
                            extra={
                                <div>
                                    <span
                                        onClick={()=>{
                                            this.setState({
                                                showEmoji:!this.state.showEmoji
                                            })
                                            this.fixPao()
                                        }}
                                       style={{marginRight:15}} 
                                    >{`😂`}</span>
                                    <span onClick={this.handleSubmit}>
                                        发送
                                    </span>
                                </div>
                            }
                        >
                        </InputItem>
                    </List>
                    {
                        this.state.showEmoji?(<Grid
                            onClick={el=>{
                                this.setState({
                                    text:this.state.text+el.text
                                })
                            }}
                            columnNum={9}
                            carouselMaxRow={4}
                            isCarousel={true}
                            data={emoji}></Grid>):null
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        user: state.User,
        chat: state.chat
    }
}

const mapDispatchToProp = dispatch =>{
    return {
        getList(){
            dispatch(getMsgList())
        },
        sendmsg({form,to,msg}){
            dispatch(sendMsg({form,to,msg}))
        },
        pullMsg(){
            dispatch(recvMsg())
        },
        readMsg(to){
            dispatch(readMsg(to))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProp)(Chat)