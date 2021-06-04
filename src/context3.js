import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  static contextTypes = {
    color:PropTypes.string
  }
  render () {
    console.log(this.context);
    return <h1 style={{color:this.context.color}}>标题</h1>
  }
}

class Content extends Component {
  static contextTypes = {
    color: PropTypes.string,
    chageColor:PropTypes.func
  }
  render () {

    return (
      <div>
        <p style={{ color: this.context.color }}>内容</p>
        <button onClick={()=>this.context.chageColor('skyblue')}>原色调</button>
        <button onClick={()=>this.context.chageColor('green')}>绿色调</button>
      </div>
    )
  }
}
class Main extends Component {
  render () {
    return (
      <div>
        <Content/>
      </div>
    )
  }
}

export default class HomePage extends Component {
  static childContextTypes = {
    color: PropTypes.string,
    chageColor:PropTypes.func
  }
  getChildContext () {
    return {
      color: this.state.color,
      chageColor:this.chageColor
    }
  }
  constructor() {
    super();
    this.state = {
      color:'skyblue'
    }
  }
  chageColor = (color) => {
    this.setState({color:color})
  }
  render () {
    return (
      <div>
        <Header/>
        <Main />
      </div>
    )
  }
}