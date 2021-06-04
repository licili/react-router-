import React from 'react';
import ReactDOM from 'react-dom'

// 函数式组件
// 函数是一个合法组件 props 属性对象 props 是只读的
// 纯函数：1. 相同的输入一定返回相同的输出 2. 永远不能修改传进去的值
function Welcome (props) {
  return (
    <h1>
      hello {props.name}
    </h1>
  )
}
 
// class 报错
class Welcome extends React.Component {
  render () {
    return <h1> hello2 { this.props.name}</h1>
  }
}

// function App () {
//   return (
//     <div>
//       <Welcome name="zf" />
//       <Welcome name="zf2" />
//       <Welcome name="zf3" />
//     </div>
//   )
// }

// react 数据自上而下流动，单向数据流。
// 事件处理： react用驼峰式命名，不是小写。而且不能用return false阻止
// 默认行为，要用e.preventDefault()。

// { 就是表达式
// <开头就是JSX、XML
// {}只能放表达式，不能放JS语句，因为需要返回值

// componentDidMount 组件挂在完成 react把虚拟dom转为真实DOM
// componentWillUnmount 准备销毁一个组件

/**
 * 处理this的几种方法
 * 1. bind this.tick.bind(this)
 * 2. 使用方法调用 ()=>this.tick()
 * 3. 定义tick的时候，使用属性初始化(ES7) 最好的方式  tick = ()=>{} 
 * 4. 在构造函数里面bind this.tick = this.tick.bind(this)
 */

/**
 * 如果想修改本地状态，也就是当前组件的在状态，必须使用this.setState
 * 用了此方法后，react会调用render方法，重新渲染
 * setState 是异步的
 * function setState(newState) {
 *   let obj = Object.assign({},this.state,newState);
 *   this.state = obj;
 *   this.render()
 * }
 */

/**
 * 受控组件 表单元素的值受组件的状态控制
 * 
 * 处理变化 
 * 1. 多传一个参数进来，变量名传进来
 * 2. 箭头函数
 */

/**
 * 非受控组件
 * [这个用法已经废弃了] ref="username" 
 * 如果想得到用户输入的值，就要通过ref获取。 this.refs.username.value
 * 如果给input框赋一个username的ref值，那么久可以通过this.refs.username获取它对应的真实DOM元素
 * 
 * 现在推荐
 * ref 如果里面放一个函数，此函数会在当此虚拟DOM转为真实DOM并插入页面后立即调用，参数为真实DOM
 * <input type="text" ref={input=>this.username=input} />
 * 
 */
/*** 
 * 类组件的渲染过程
 * 1. 当我们把Clock组件传递给render方法后
 * 2. 先封装props属性对象
 * 3. 找到Clock类的定义,然后实例化Clock实例，new Clock(props)
 * 4. 调用Clock类实例的render方法，得到返回的render元素
 * 5. 把此react元素渲染到页面中去，变成真实DOM
 * 6. 当渲染完成后，会调用componentDidMount，创建一个定时器，赋给实例的timerID
 * 7. 每秒钟调用一次tick改变state，重新触发render
 */

/**
 * 状态提升
 * 父组件可以传递数据给子组件进行通信，但是子组件和子组件之间不能通信，所以
 * 要通过提升到父组件然后进行通信。
 */

/**
 * 组件运行方式
 * 1. render发现一个用户自定义组件，如果标签名是以大写字母开头的就是用户
 * 自定义组件，如果是小写开头就是DOM组件
 * 2. 先把JSX的属性封装为一个props对象， {name:"lici"}
 * 3. 把它作为参数传递个Welcome函数，获取到一个返回值，返回值是一个React元素
 * 4. render 方法会把此react元素渲染到页面上 
 * antdesign + imutablejs + mbox + docker => 博客，论坛
 */

ReactDOM.render(<Welcome name="lici"/>, document.getElementById('root'));
// ReactDOM.render(<App/>, document.getElementById('root'));


