import React, {
    Component
} from 'react'
import { 
    WingBlank,
    Card
} from 'antd-mobile'
import { withRouter } from 'react-router-dom'

class UserCard extends Component {

    handleClick(v){
        this.props.history.push(`/chat/${v._id}`)
    }

    render() {
        const { Header,Body } = Card
        return (
            <WingBlank>
                {
                    this.props.userData.map(v=>(
                        v.avatar?(<Card
                            onClick = { ()=>this.handleClick(v) }
                        key={v._id}>
                            <Header
                                title={v.user}
                                thumb={require(`../img/${v.avatar}.png`)}
                                extra={v.title}
                            ></Header>
                            <Body>
                                {
                                    v.type==='boss'?<div>公司:{v.company}</div>:null
                                }
                                { v.desc.split('\n').map(v=>(
                                    <div key={v}>{v}</div>
                                )) }
                                {
                                    v.type==='boss'?<div>薪资:{v.money}</div>:null
                                }
                            </Body>
                        </Card>):null
                    ))
                }
            </WingBlank>
        )
    }
}

export default withRouter(UserCard)