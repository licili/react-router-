import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import local from './local'

class Mobile extends Component {

  render () {
    return (
      <label>手机<input defaultValue={this.props.data} onChange={ this.props.save}/><br /></label>
    )
  }
}

export default local(Mobile,'mobile','手机')