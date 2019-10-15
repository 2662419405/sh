import React, { Component } from 'react'

export default function shForm(Comp){
    return class WrapperComp extends Component{
        constructor(props){
            super(props);
            this.state={}
            this.handleChange = this.handleChange.bind(this)
        }
        handleChange = (key,val)=>{
            this.setState({
                [key]:val
            })
        }
        render(){
            return <Comp state={this.state} {...this.props} handleChange={this.handleChange} />
        }
    }
}
