import React, { Component } from 'react';
import WrapperComponent from './WrapperComponent';

class InputWithUserName extends React.Component {
  change = (e) => {
    console.log(e.target.value)
  }
  render () {
    return <input defaultValue={this.props.data} onChange={this.change}/>
  }
}
  
InputWithUserName = WrapperComponent(InputWithUserName, 'username')
export default InputWithUserName
