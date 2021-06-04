import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render () {
    return <h1 style={{color:this.props.color}}>标题</h1>
  }
}
class Content extends Component {
  render () {
    return <p style={{color:this.props.color}}>内容</p>
  }
}
class Main extends Component {
  render () {
    return (
      <div>
        <Content color={ this.props.color}/>
      </div>
    )
  }
}

export default class HomePage extends Component {

  constructor() {
    super();
    this.state = {
      color:''
    }
  }
  handleClick = (color,e) => {
    this.setState({color})
  }
  render () {
    return (
      <div>
        <Header color={ this.state.color}/>
        <Main color={ this.state.color}/>
        <button onClick={(e)=>this.handleClick('yellow',e)}>变黄</button>
        <button onClick={(e)=>this.handleClick('green',e)}>变绿</button>
      </div>
    )
  }
}