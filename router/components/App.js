import React, { Component } from 'react';
// import MenuLink from './MenuLink'
// import {HashRouter as Router,Link } from 'react-router-dom'
import {HashRouter as Router,Link } from '../react-router-dom/index'
// link其实就是一个a标签
export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <div className="navbar-brand">管理系统</div>
              </div>
              <ul className="nav navbar-nav">
                <li><Link to="/home" >首页</Link></li>
                <li><Link to="/user" >用户管理</Link></li>
                <li><Link to="/profile" >个人设置</Link></li>
                {/* <MenuLink to="/home"> 首页</MenuLink>
                <MenuLink to="/user"> 用户管理</MenuLink>
                <MenuLink to="/profile"> 个人设置</MenuLink> */}
              </ul>
            </div>
          </nav>
          <div className="row">
            <div className="col-md-12">
              {this.props.children }
            </div>
          </div>
        </div>
      </Router>
    )
  }
}