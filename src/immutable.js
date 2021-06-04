/**
 * immutable 可以基于共享部分对象来创建新的对象
 */

// const { Map } = require('immutable');
// let m1 = Map({ a: 1, b: 2, c: 3 });
// console.log(m1.get('a'));
// let m2 = m1.set('a', 11);
// console.log(m2.get('a'));
// console.log(m1.get('a'));

// let m1 = Map({ a: 1, b: { c: 1 } });
// let m2 = m1.set('a', 11);

let immutable = require('seamless-immutable');
let m1 = immutable({ info: { name: 'zfpx' } });
console.log(m1.info.name);