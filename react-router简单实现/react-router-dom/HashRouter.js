import React from 'react';
import PropTypes from 'prop-types';

export default class HashRouter extends React.Component {
  static childContextTypes = {
    location: PropTypes.object,
    history:PropTypes.object
  }
  getChildContext () {
    let that = this;
    return {
      location: this.state.location,
      history: {
        push (path) {
          // 处理path 是对象的问题
          if (typeof path === 'object') {
            let { pathname, state } = path;
            that.setState({ location: { ...that.state.location, state } }, _ => {
              window.location.hash = pathname
            })
          } else {
            window.location.hash = path;
          }
        }
      }
    }
  }
  constructor() {
    super();
    this.state = {
      location: {
        state: {},
        pathname: window.location.hash.slice('1') || ''
      }
    }
  }
  componentDidMount () {
    window.location.hash = window.location.hash || '/'
    let render = () => {
      this.setState({
        // location:{pathname:window.location.hash.slice('1') || ''}
        location: {
          ...this.state.location,
          pathname: window.location.hash.slice(1) || '/'
        }
      })
    }
    window.addEventListener('hashchange',render)
  }

  render () {
    return this.props.children
  }
}