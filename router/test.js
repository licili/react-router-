let pathToRegexp = require('path-to-regexp');
let str = '/user/detail/:id/:name';
let keys = [];
// end为ture是完整匹配  为false 是匹配前缀
let reg = pathToRegexp(str, keys, { end: true });
keys = keys.map(key => key.name);
let uri = '/user/detail/1/zfpx';
let [url, ...values] = uri.match(reg);
let params = keys.reduce((memo, key, idx) => {
  memo[key] = values[idx]
  return memo;
}, {})

console.log(params);