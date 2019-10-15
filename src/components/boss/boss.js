import React, { Component } from 'react'
import { 
    WingBlank,
    Card
} from 'antd-mobile'
import { connect } from 'react-redux'
import { getUserList } from '../../redux/chat-store'

class boss extends Component {

    componentWillMount(){
        this.props.getDefault('boss')
    }

    render() {

        const { Header,Body } = Card
        const { userlist } = this.props
        console.log(userlist)

        return (
            <WingBlank>
                {
                    userlist.map(v=>(
                        v.avatar?(<Card key={v._id}>
                            <Header
                                title={v.user}
                                thumb={require(`../img/${v.avatar}.png`)}
                                extra={v.title}
                            ></Header>
                            <Body>
                                { v.desc.split('\n').map(v=>(
                                    <div key={v}>{v}</div>
                                )) }
                            </Body>
                        </Card>):null
                    ))
                }
            </WingBlank>
        )
    }
}

const mapStateToProps = state =>{
    return {
        userlist: state.chatuser.userlist
    }
}

const mapDispatchToProp = dispatch =>{
    return {
        getDefault(type){
            dispatch(getUserList(type))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProp)(boss);