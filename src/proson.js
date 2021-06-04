import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
let p = {
  name: 'zfcx',
  age: 900,
  gender: '男',
  hobby: ['football'],
  position: { x: 10, y: 10 },
  heightRange: {
    min: 30,
    max: 220
  }
}
export default class Person extends React.Component {
  // 类型校验
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.oneOf(['男', '女', '其他']),
    hobby: PropTypes.array,
    position: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    }),
    // 因为校验比较复杂，需要
    age: function (props, propName, componentName) {
      if (props[propName] < 0 || props[propName] > 120) {
        throw new Error('年龄区间有点夸张')
      }
    }
  }
  constructor(props) {
    super(props);
  }
  handleBlur = (event) => {
    let height = event.target.value;
    if (!height || isNaN(height)
      || parseFloat(height) < this.props.heightRange.min
      || parseFloat(height) > this.props.heightRange.max) {
      alert('输入身高不合法'); 
      event.target.value = ''
      }
  }
  render () {
    let { name, age, gender, hobby, position } = this.props
    return (
      <table>
        <thead>
          <tr>
            <th>姓名</th>
            <th>年龄</th>
            <th>性别</th>
            <th>爱好</th>
            <th>位置</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name.toString()}</td>
            <td>{age.toString()}</td>
            <td>{gender.toString()}</td>
            <td>{hobby.toString()}</td>
            <td>{position.toString()}</td>
          </tr>
          <tr>
            <td>输入你的年龄</td>
            <td><input onBlur={ this.handleBlur}/></td>
          </tr>
        </tbody>
      </table>
    )
  }
}

ReactDOM.render(<Person {...p}/>,document.getElementById('root'))

