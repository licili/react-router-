import React,{Component} from 'react';
import {Link,Route} from './react-router-dom';

export default class User extends React.Component {
  render () {
    return (
      <div className="row">
        <div className="col-md-2">
          <ul className="nav nav-stacked nav-pills">
            <li><Link to="/user/add">添加用户</Link></li>
            <li><Link to="/user/list">用户列表</Link></li>
          </ul>
        </div>
        <div className="col-md-10">
          <Route path="/user/add" component={ UserAdd}></Route>
          <Route path="/user/list" component={ UserList}></Route>
          <Route path="/user/detail/:id" component={ UserDetail}></Route>
        </div>
      </div>
    )
  }
}


class UserAdd extends Component {
  handleSubmit = (e) => {
    let user = localStorage.getItem('user');
    user = JSON.parse(user) || [];
    user.push({
      name: this.input.value,
      id:new Date().getTime()
    })
    localStorage.setItem('user', JSON.stringify(user));
    this.props.history.push('/user/list')
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>用户名</label>
          <input className="form-control" ref={input=>this.input=input} placeholder="输入用户名"/>
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit"/>
        </div>
      </form>
    )
  }
}

class UserList extends Component {
  render () {
    let user = localStorage.getItem('user');
    user = JSON.parse(user) || [];
    return (
      <ul className="list-group">
        {
          user.map(item => {
            return <li className="list-group-item" key={item.id}><Link to={ "/user/detail/"+item.id}>{item.name}</Link></li>
          })
        }
      </ul>
    )
  }
}

class UserDetail extends Component {
  render () {
    console.log(this.props);
    return <h1>{this.props.id}-{ this.props.name}</h1>
  }
}