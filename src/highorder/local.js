/**
 * 高阶组件就是一个函数。用来封装重复的逻辑
 * 传进去一个老组件，返回一个新组件
 * 
 */

import React,{
  Component
} from "react";

export default function (OldComponent, name, placeholder) {
  class NewComponent extends Component {
    constructor() {
      super();
      // 因为状态是可变的，所以要设置状态
      this.state = {
        data:''
      }
    }
    componentWillMount () {
      this.setState({data:localStorage.getItem(name) || placeholder})
    }
    save = (e) => {
      localStorage.setItem(name, e.target.value)
    }
    render() {
      return <OldComponent data={this.state.data} save={this.save} />
    }
  }
  // 返回新组件
  return NewComponent;
}