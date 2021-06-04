import React from 'react';
import PropTypes from 'prop-types';
import {pathToRegexp} from 'path-to-regexp'
console.log(pathToRegexp);
export default class Route extends React.Component {
  static contextTypes = {
    location: PropTypes.object,
    history:PropTypes.object
  }
  constructor(props) {
    super(props);
    this.keys = [];
    let { path } = props;
    this.regexp = pathToRegexp(path, this.keys, { end: false })
    this.keys = this.keys.map(item => item.name);
  }
  render () {
    let { path, children,component:Component,render} = this.props
    let { location: { pathname } } = this.context;


    // 如果路径和路由匹配
    /**
     * 如果是一级路由匹配，用这种方式勉强可以。二级路由就不可以了。
     */
    if (this.regexp.test(pathname)) {
      let result = pathname.match(this.regexp)
      let params = this.keys.reduce((meno, item, idx) => {
        meno[item] = result[idx + 1]
        return meno
      }, {})
      let props = {
        location: this.context.location,
        history: this.context.history,
        match: {
          url: result[0],
          path,
          params
        }
      }

      if (Component) {
        console.log('?');
        return <Component {...props}  />
      } else if (render) {
        return render(props)
      } else if (children) {

        return children(props)
      } else {
        return null;
      }
    } else {
      if (children) {
        return children(this.props)
      } else {
        return null
      }
    }

    // if (path == pathname || pathname.startsWith(path)) {
    //   // 如果有子元素，渲染子元素
    //   return <Component location={ this.context.location} history={this.context.history} />
    // } else {
    //   return null;
    // }
  }
}