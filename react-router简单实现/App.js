import React from 'react';
import { HashRouter as Router, Link } from './react-router-dom';
import MenuLink from './MenuLink';
export default class App extends React.Component {
  render () {
    return (
      <Router>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collpase" data-target="#navbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand">
                LOGO
              </a>
            </div>
            <div className="navbar-collapse collapse" id="nav">
              <ul className="nav navbar-nav">
                 {/* <li className="active"><Link to="/index">首页</Link></li>
                <li className=""><Link to="/user">用户</Link></li>
                <li className=""><Link to="/profile">个人中心</Link></li>       */}
                <MenuLink to="/index">首页</MenuLink> 
                <MenuLink to="/user">用户</MenuLink>
                <MenuLink to="/profile">个人中心</MenuLink>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <div >{ this.props.children}</div>
        </div>
      </Router>
    )
  }
}