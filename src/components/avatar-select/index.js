import React, { Component } from 'react'
import {
    Grid,
    List
} from 'antd-mobile'
import PropTypes from 'prop-types'

export default class index extends Component {

    static propTypes = {
        selectAvatar: PropTypes.func
    }

    constructor(props){
        super(props);
        this.state={}
    }

    render() {

        const avatarList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hip,koala,lemur,pig,tiger,whale,zebra'
                        .split(',')
                        .map(v=>({
                            icon: require(`../img/${v}.png`),
                            text:v
                        }))

        const girdHeader = this.state.icon? (<div>
                                                <span>已选择头像</span>
                                                <img style={{height:20,position:'relative',top:2,left:5}} src={this.state.icon} alt='头像' />
                                            </div>) : '请选择头像';

        return (
            <div>
                <List renderHeader={()=>girdHeader}>
                    <Grid square={true} data={avatarList} columnNum={5}
                        renderItem={dataItem => (
                            <div style={{ padding: '12.5px' }}>
                                <img src={dataItem.icon} style={{ width: '32px', height: '32px' }} alt="" />
                                <div>
                                    <span style={{fontSize:'10px'}}>{dataItem.text}</span>
                                </div>
                            </div>
                        )}
                        onClick={ele=>{
                            this.setState(ele)
                            this.props.selectAvatar(ele.text)
                        }}
                    >
                    </Grid>
                </List>
            </div>
        )
    }
}
