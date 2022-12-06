// import React from "react";
import React from 'react';
import '../assets/style/demo.scss'
import ReactDOM from 'react-dom'
// import { type } from 'os';
export default class Demo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      c : 90
    }
  }
  render() {
    console.log(3344)
    return (
      <div>
        函数组件
        <p className='deemo'>Demo组件</p>
        <Content value="aa" />
      </div>
    )
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.el = document.getElementById('root')
  }

  render() {
    // createPortal 相当于vue 的 Teleport , 可以插入到任意位置显示
    const Child = ReactDOM.createPortal(<span style={{color: 'red'}}>778插</span>, this.el)
    console.log(Child,999)
    return <>
      <ul>
        <li>12233</li>
        <li>33333</li>
      </ul>
      <span>5666{Child}</span>
      <p>我在最下面</p>
    </>
  }
}




