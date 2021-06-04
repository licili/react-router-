import React from 'react';
import {Route,Link} from '../react-router-dom/index';
import './MenuLink.css';
export default ({to,children}) => {
  return <Route path={to} children={props => {
    console.log(props);
    return <li className={props.match ? "xxx" : ""}>
      <Link to={to} >{children}</Link></li>
  }} />
}