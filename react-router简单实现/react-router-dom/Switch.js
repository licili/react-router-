import React, { Component } from 'react';
import PorpTypes from 'prop-types';
import { pathToRegexp } from 'path-to-regexp'
import {Route} from './index'

// Switch 包裹很多路由规则，它会取出子组件挨个匹配
export default class Switch extends Component{
  static contextTypes = {
    location:PorpTypes.object
  }
  render () {
    // 获取 Route
    let children = this.props.children;
    // 获取上下文的location
    let {pathname} = this.context.location;
    for (let i = 0; i < children.length; i++) {
      let child = children[i];
      let { path,component:Component } = child.props;
      if (pathToRegexp(path, [], { end: false }).test(pathname)) {
        return <Component {...child.props}/>
      }
    }
    return null;
  }
}