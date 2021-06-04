import React from 'react';
import ReactDOM from 'react-dom'


function tick () {
  let clock = (
    <div>
      <h1>hello</h1>
      <h2>{ new Date().toLocaleString()}</h2>
    </div>
  )
  // reactDom只会更新变化的部分
  ReactDOM.render(clock, document.getElementById('root'));
}
setInterval(tick,1000)
