import React, { Component } from 'react';
class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError:false
    }
  }
  //捕获错误
  componentDidCatch (hasError) {
    this.setState({hasError})
  }
  render () {
    if (this.state.hasError) {
      return <div>此组件暂时无法显示</div>
    }
    return this.props.children;
  }
}
class Todo extends Component {
  render () {
    return <div>{ null.toString()}</div>
  }
}

export default class MyPage extends Component {
  render () {
    return (
      <ErrorBoundary>
        <Todo />
      </ErrorBoundary>
    )
  }
}