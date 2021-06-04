import React from 'react';
import { Link, Route, Switch,Redirect} from '../react-router-dom'


// 用来保护那些只有登录后才能访问的路由
// 如果用户已经登录，则可以直接渲染component，如果没有登录，则需要跳转到登录页，登录后再跳转回来
// 组件渲染的几种方式：1. component 2. render 3.children
export default function ({ component: Component, ...rest }) {
  return <Route {...rest} render={props => (
    localStorage.getItem('login') ? <Component {...props} /> : <Redirect to={{pathname:'/login',state:{form:props.location.pathname}}} />
  )}/>
}