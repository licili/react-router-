import React, { Component } from 'react';
const ColorContext = React.createContext({ color: 'skyblue', setColor: () => { }})
class Title extends Component {
  static contextType = ColorContext;
  render () {
    return (
      <div>
        <h1 style={{color:this.context.color}}> 我是标题</h1>
      </div>
    )
  }
}
class Content extends Component {
  render () {
    return (
      <ColorContext.Consumer>
        {({color, list}) => list.map((item,index) => (
          <li key={index}>{ item }</li>
        ))}
      </ColorContext.Consumer>
    )
  }
}
class Header extends Component {
  render () {
    return (
      <div>
        <Title />
      </div>
    )
  }
}
class Main extends Component {
  render () {
    return (
      <div>
        <Content />
      </div>
    )
  }
}

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      list:[1,2,3,4]
    }
  }
  setColor = (color) => {
    this.setState({color})
  }
  render () {
    return (
      <ColorContext.Provider value={{color:this.state.color,list:this.state.list}}>
        <Header />
        <Main />
      </ColorContext.Provider>
    )
  }
}