import React from 'react';
import PropTypes from 'prop-types'

export default class Link extends React.Component {
  static contextTypes = {
    history:PropTypes.object
  }
  render () {
    return (
      // <a href={"#" + this.props.to}>{this.props.children}</a> //这个只能处理hashRouter
      <a onClick={()=>{this.context.history.push(this.props.to)}}>{this.props.children}</a>
    )
  }
}