import React from 'react';
import PropTypes from 'prop-types'

export default class Redirect extends React.Component {
  static contextTypes = {
    history:PropTypes.object
  }
  componentDidMount () {
    console.log(this.props.to);
    console.log(this.context.history);
    this.context.history.push(this.props.to)
  }
  render () {
    return null;
  }
}