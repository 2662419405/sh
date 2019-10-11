import React, { PureComponent } from 'react'
import {Button,List} from 'antd-mobile'
import { connect } from 'react-redux'
import * as actions from './createAction'

class App extends PureComponent {

  state = {
    result: []
  }

  componentDidMount(){
    this.props.handlerPropGetValue();
  }

  render() {

    const { result, handlerClickStart } = this.props;

    return (
      <div>
        <Button
          onClick={ handlerClickStart }
        type="primary">开始</Button>
        <List>
          {
            result.map(v=>{
              return(
                <List.Item key={v._id}>{v.user}</List.Item>
              )
            })
          }
        </List>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handlerClickStart(){
      dispatch(actions.getClick());
    },
    handlerPropGetValue(){
      dispatch(actions.getDefaultValue());
    }
  }
}

const mapStateToProps = state => {
  return {
    name: state.Demo.name,
    result: state.Demo.result
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);