import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// HashRouter 通过路径 里的哈希变量实现
// BrowserRouter 用的是html的historyAPI
// import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {HashRouter as Router,Route,Link,Switch} from './react-router-dom';
import App from './components/App'
import User from './components/User'
import Protected from './components/Protected'
import Login from './components/Login'


/**
 * 测试驱动开发 先写一个测试用例，看看原生路由的效果，然后自己实现一个
 * Router 是路由容器
 * Route 代表一条的路由规则
 */


// 函数式组件
// let Home = () => <div>首页</div>
let Home = (props, context) => {
  // console.log(props); // {history:{push()},location:{pathname:''},match:{isExtract:true,...}}
  // console.log(context);
  return <div>首页</div>
}
// let User = () => <div>用户管理</div>

let Profile = () => <div>个人设置</div>
// 渲染的时候会先取当前的路径（location.hash）,然后跟path进行匹配，如果匹配的上，则显示component指定的组件，如果不能匹配则不显示
// Router 只能有一个根元素
ReactDOM.render(
  // 路由规则匹配，就算你第一个匹配到了，它还会向后找看有没有匹配的。使用Switch后，匹配上就停止匹配了（优化）
  <App>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/user" component={User} />
      <Route path="/login" component={Login} />
      {/* <Route path="/profile" component={Profile} /> */}
      <Protected path="/profile" component={Profile} />
    </Switch>
    </App>,
  document.querySelector('#root')
)