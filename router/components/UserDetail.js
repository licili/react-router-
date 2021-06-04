import React from 'react';
import User from './User';
// /user/detail/1  => /user/detail/:id 路径参数
export default class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{}
    }
  }
  componentDidMount () {
    console.log(this.props);
    let userStr = localStorage.getItem('users');
    let users = userStr ? JSON.parse(userStr) : [];
    let user = users.find(user => user.id == this.props.match.params.id);
    this.setState({user})
  }
  render () {
    // console.log(this.state.user);
    return (
      <div>
        {this.state.user.id} : {this.state.user.username}
     </div>
    )
  }
}