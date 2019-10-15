import React, {
    Component
} from 'react'
import { 
    WingBlank,
    Card
} from 'antd-mobile'

class UserCard extends Component {
    render() {
        const { Header,Body } = Card
        return (
            <WingBlank>
                {
                    this.props.userData.map(v=>(
                        v.avatar?(<Card key={v._id}>
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

export default UserCard