import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TabBar } from 'antd-mobile'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

class navlink extends Component {

    static propTypes = {
        data: PropTypes.array.isRequired
    }

    render() {

        const navList = this.props.data.filter(v=>!v.hide)
		const {pathname} = this.props.location
		return (
			<TabBar>
				{navList.map(v=>(
					<TabBar.Item
						badge={v.path==='/msg'?this.props.chat.unread:null}
						key={v.path}
						title={v.text}
						icon={{uri: require(`./img/${v.icon}.png`)}}
						selectedIcon={{uri: require(`./img/${v.icon}-active.png`)}}
						selected={pathname===v.path}
						onPress={()=>{
							this.props.history.push(v.path)
						}}
					>
					
					</TabBar.Item>
				))}
			</TabBar>
        )
        
    }
}

const mapStateToProp = state =>{
    return {
        chat: state.chat
    }
}

export default connect(mapStateToProp,null)(withRouter(navlink))