import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserList } from '../../redux/chat-store'
import UserCard from '../userCard/userCard'

class boss extends Component {

    componentWillMount(){
        this.props.getDefault('genius')
    }

    render() {

        const { userlist } = this.props

        return (
            <UserCard userData={ userlist }></UserCard>
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