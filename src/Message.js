import React, { Component } from 'react';

class List extends Component {
  render () {
    return (
      <>
        {
          this.props.messages.map((item,index) => <li key={index}>{item}</li>)
        }
      </>
    )
  }
}

export default class Messages extends Component {
  constructor() {
    super();
    this.state = {
      messages:[1,2,3]
    }
  }
  render () {
    return (
      <ul>
        {/* {
          this.state.message.map((item,index) => <li key={index}>{item}</li>)
        } */}
        {/* 有时候我们想把这个东西拎出去，变为一个组件  但是放出去，会多一个div标签，所以可以使用React.Fragment或者<></>包裹*/}
        <List messages={this.state.messages} />
      </ul>
    ) 
  }
}