import PropTypes from 'prop-types';
import React,{Component} from 'react';

// 它主要是获取当前当上文中的hash路径，然后传给子组件进行匹配

export default class HashRouter extends Component {
  static childContextTypes = {
    location: PropTypes.object,
    history:PropTypes.object
  }
  constructor(props) {
    super(props);
    this.state = {
      location: {
        state: {},
        pathname:window.location.hash.slice(1) || '/'
      }
    };
  }
  getChildContext () {
    let that = this;
    return {
      location: {
        pathname:window.location.hash.slice(1) || '/'
      },
      history: {
        push (path) {
          if (typeof path === 'object') {
            // state 保存状态的
            let { pathname, state } = path;
            that.setState({ location: { ...that.state.location, state } }, _ => {
              window.location.hash = pathname
            })
          } else {
            window.location.hash = path
          }
        }
      }
    }
  }
  componentDidMount () {
    window.location.hash = window.location.hash || '/';
    
    let render = () => {
      // console.log('render');
      // 会重新渲染 记得要加{}
      this.setState({location:{...this.state.location,pathname:window.location.hash.slice(1) || '/'}})
    }
    window.addEventListener('hashchange',render)
  }
  render () {
    return this.props.children;
  }
}