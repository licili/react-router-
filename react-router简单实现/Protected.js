import React, { Component } from 'react';
import {Route,Redirect} from './react-router-dom/index'
export default function ({ component: Component, ...rest }) {
  console.log('hhh');
  return <Route {...rest} render={props => (
    localStorage.getItem('login') ? <Component {...props} /> : <Redirect to={{pathname:'/login',state:{from:props.location.pathname}}} />
  )}/>
}