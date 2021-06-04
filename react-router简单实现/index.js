import React, { Component } from 'react';
// import { HashRouter as Router, Route,Link,Switch} from './react-router-dom';
import { HashRouter as Router, Route,Switch } from './react-router-dom';

import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App'
import User from './User'
import Protected from './Protected';

// component 为什么
let Index = () => <h1>INDEX</h1>

let Profile = ()=> <h2>PROFILE</h2>

class Login extends Component {
  static contextTypes = {
    history:PropTypes.object
  }
  hanleClick = () => {
    localStorage.setItem('login', true);
    console.log(this.props.location);
    this.context.history.push(this.props.location.state.from)
  }
  render () {
    return (
      <button className="btn btn-primary" onClick={this.hanleClick}>登陆</button>
    )
  }
}

ReactDOM.render(<App>

    <Route path="/index" component={Index}></Route>
    <Route path="/user" component={User}></Route>
    <Route path="/login" component={Login} />
    {/* <Route path="/profile" component={Profile}></Route> */}
    <Protected path="/profile" component={Profile} />

</App>,document.getElementById('root'))