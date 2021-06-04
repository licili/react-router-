import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import local from './local'

class UserName extends Component {
  // componentDidMount () {
  //   this.username.value = localStorage.getItem('username') || '请输入昵称';
  // }
  // handleChange = (e) => {
  //   localStorage.setItem('username',e.target.value)
  // }
  // render () {
  //   return (
  //     <label>用户名<input ref={input=>this.username=input} onChange={ this.handleChange}/><br /></label>
  //   )
  // }
  render () {
    return (
      <label>用户名<input defaultValue={this.props.data} onChange={ this.props.save}/><br /></label>
    )
  }
}

export default local(UserName, 'username', '用户名')

/**
 * 希望加载数据的时候，先从localstrage里去掉
 * 封装：从里往外封装，执行从外往里执行。和Koa中间件原理 === redux中间件原理一样
 */