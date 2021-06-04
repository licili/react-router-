import React from 'react';
import {Link,Route} from '../react-router-dom'
export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }
  // compoentWillMount 不推荐使用了
  componentDidMount () {
    let userStr = localStorage.getItem('users');
    let users = userStr ? JSON.parse(userStr) : [];
    this.setState({users})
  }
  render () {
    // console.log(this.state.users,"??");
    return (
      <ul className="list-group">
        {
          this.state.users.map((user,index) => (
            <li key={index} className="list-group-item">
              <Link to={"/user/detail/" + user.id}>{ user.username} </Link>
            </li>
          ))
        }
      </ul>
    )
  }
}