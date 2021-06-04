import React,{ Component } from "react";
import ReactDOM from 'react-dom'
class Counter extends Component { //他会比较两个状态相等1就不会刷新视图PureComponent 是浅比较
 // 默认属性对象
  static defaultProps = {
    name: "珠峰"
  };
  constructor(props) {
    super(props);
    this.state = { number: 0 };
    console.log('1.constructor 构造函数');
  }
  componentWillMount () { // 取本地的数据，同步的方式：采用渲染之前获取数据，只渲染一次
    console.log('2 组件将要加载 componentWillMount');
  }
  componentDidMount () {
    console.log('4. 组件挂载完成 componentDidMount');
  }
  handleClick = () => {
    // this.setState(prevState => ({ //老状态
    //   count:prevState.count + 1
    // }))
    this.setState({ number: this.state.number + 1 });
  }
  // react可以shouldComponentUpdate 方法中优化PureComponent 可以帮我们做这件事
  // 询问组建是否被更新，当一个组件的属性或者让状态只要一个发生改变，默认就会重新渲染
  shouldComponentUpdate (nextProps, nextState) { // 代表下一次状态和下一次属性
    console.log('5.组件是否更新 shouldComponentUpdate');
    return nextState.number % 2;
    // return nextState.number!== this.state.number ; // 如果此函数返回了false就不会调用render方法了
  }
  componentWillUpdate () {
    console.log('6. 组件将要更新 componentWillUpdate');
  }
  componentDidUpdate () {
    console.log('7. 组件完成更新 componentDidUpdate');
  }
  componentWillUnmount () {
    console.log('组件 componentWillUnmount');
  }
  // 销毁组建
  destry = () => {
    // 清楚定时器 （常用）
    window.clearInterval(this.timer);
    ReactDOM.unmountComponentAtNode(document.querySelector('#root'))
  }
  render () {
    console.log('3.render');
    return (
      <div>
        <p> {this.state.number} </p>
        <button onClick={this.destry}>destory</button>
        {this.state.number > 3 ? null : <ChildCounter n={this.state.number} />}
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}



class ChildCounter extends Component {
  componentWillUnmount () {
    console.log('组件将要卸载 componentWillUnmount');
  }
  componentWillMount () {
    console.log('child componentWillMount');
  }
  // 当子组件将要接受到父组件传给它的新属性的时候
  componentWillReceiveProps () {
    console.log('SubCounter componentWillReceiveProps');
  }
  // 要返回布尔型
  shouldComponentUpdate (nextProps,nextState) {
    console.log('SubCounter shouldComponentUpdate');
    return true
  }
  componentWillUpdate () {
     console.log('SubCounter componentWillUpdate');
  }
  componentDidUpdate () {
     console.log('SubCounter componentDidUpdate');
  }
  render () {
    console.log('child-render');
    return (
      <div>
        <h1>子计数</h1>
        {this.props.n}
      </div>
    )
  }
}
ReactDOM.render(<Counter />, document.getElementById('root'))

/**
 * 1.constructor 构造函数
 * 2 组件将要加载 componentWillMount
 * 3.render
 * child componentWillMount
 * child-render
 * 4. 组件挂载完成 componentDidMount
 */