import React, { Component, PureComponent } from 'react';
import {Map,fromJS,List} from 'immutable';
class PureComponent extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    // 循环下一个新的属性对象的每一个属性，判断新旧属性值是否为同一个
    // 重点强调：这个比较是浅比较。如果改为深比较CPU压力变大，如果是浅比较，每次要返回一个新的对象
    // 两全其美(即不浪费内存情况下，产生新对象) ==> immutable
    for (let prop in nextProps) {
      if (nextProps[prop] !== this.props[prop]) {
        return true;
      }
    }
    for (let prop in nextState) {
      if (nextProps[prop] !== this.props[prop]) {
        return true;
      }
    }
    return false;
  }
}
export default class Main extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {todos:[]}
  }
  handleClick = () => {
    let todo = this.todo.value;
    let todos = List(this.state.todos)
    todos = todos.push(todo)
    this.setState({ todos })
    
    // this.state.todos.push(todo)
    // this.setState({
    //   // 每次都要生成一个新的对象，占用内存高
    //   todos:[...this.state.todos]

    // })
  }
  // 重写此方法减少重新渲染 因为setState会重新调用render函数
  // shouldComponentUpdate (nextProps,nextState) {
  //   if (nextState.todos === this.state.todos) {
  //     // 如果新老状态同样，就不用刷新
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  render () {
    return (
      <div>
        <input ref={ input=>this.todo=input}/><button>+</button>
        <ul>
          {
            this.state.todos.map((todo, index) => (<li key={ index }>{ todo}</li>))
          }
        </ul>
      </div>
    )
  }
}