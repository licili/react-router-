import PropTypes from 'prop-types';
import React,{Component} from 'react';
import pathToRegexp from 'path-to-regexp'
// 它主要是获取当前当上文中的hash路径，然后传给子组件进行匹配


export default class Route extends Component {
  constructor(props) {
    super(props);
    let { path } = props; // /user/detail/:id
    this.keys = [];
    // end:false 要模糊匹配
    this.regexp = pathToRegexp(path, this.keys, { end: false });
    // this.key是对象数组，要转为字符串数组
    this.keys = this.keys.map(key => key.name);
  }
  static contextTypes = {
    location: PropTypes.object,
    history:PropTypes.object
  }
  render () {
    let { path, component: Component,render,children} = this.props;
    console.log('route render ' + path);
    let {location} = this.context;
    // let { location: { pathname } } = this.context;
    // console.log(path,pathname);
    // 要匹配路径参数了，这个规则没用了
    // if (path === pathname || pathname.startsWith(path)) {
    //   return <Component location={this.context.location} history={this.context.history}/>
    // }
    // return null;
    let props = {
      location,
      history:this.context.history
    }

    let result =location.pathname.match(this.regexp);
    // console.log(result,this.regexp);
    if (result) {
      let [url, ...values] = result;
      props.match = {
        url,
        path,
        params: this.keys.reduce((memo,key,idx) => {
          memo[key] = values[idx];
          return memo;
        }, {})
      }
      if (Component) {
        return <Component {...props} />
      } else if (render) {
        return render(props)
      } else if (children) {
        return children(props)
      }else {
        return null;
      }
    } else {
      if (children) {
        return children(props)
      } else {
        return null;
      }
    }
    
  }
}