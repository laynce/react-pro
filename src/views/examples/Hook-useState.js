import React from 'react';
import '../assets/style/demo.scss'
import {useState} from 'react' 
// 无论是函数组件还是类组件都有defaultProps

// Profiler测试性能的组件
export default function Demo(props) {
  const [count, setCount] = useState({ b: 10 })

  setTimeout(() => {
    setCount(50)
  }, 3000)

  return (
    <>
      <div>Hook 开始</div>
      <p>第一个hook useState</p>
      <Content age='' count={count} />
    </>
  )

}


function Content(props) {
  console.log('再次渲染', props.count)
  const [count, setCount] = useState(props.count) 
  const change = function () {
    setCount(Object.assign({}, count, { b: count.b + 1 })) //  state 变量总是替换它而不是合并
  }

  console.log(count, 777)
  return (
    <>
      <div>
        <p>数量: {count.b}</p>
        <button onClick={change}>加</button>&nbsp;
        <button onClick={() => setCount(Object.assign({}, count, {b: count.b - 1}))}>减</button>
      </div>
    </>
  )
}


// class Cont extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       count: {
//         b: 80
//       }
//     }

//     this.change = this.change.bind(this)
//   }
//   componentDidMount() {
   
//   }

//   change() {
//     this.state.count.b = this.state.count.b + 1
//     this.forceUpdate() // 可以更新state，不建议这样使用，建议使用setState
//     console.log(this.state.count.b)
//   }

//   render() {
//     return (
//       <>
//       <div>
//         <p>数量: {this.state.count.b}</p>
//         <button onClick={this.change}>加</button>&nbsp;
//       </div>
//     </>
//     )
//   }
// }