import React, { useCallback } from 'react';
import '../assets/style/demo.scss'
import {useState, useEffect} from 'react' 
// 无论是函数组件还是类组件都有defaultProps

// Profiler测试性能的组件

// 不要在循环，条件或嵌套函数中调用 Hook， 确保总是在你的 React 函数的最顶层调用他们。
export default function Demo(props) {
  const [flag, setFlag] = useState(true)
  return (
    <>
      <div>Hook 开始</div>
      <p>第二个hook useEffect</p>
      <button onClick={()=> setFlag(false)}>清楚定时器</button>
      {flag ? <Content /> : ''}
    </>
  )

}

// export default class Demo extends React.Component{
//   componentDidMount() {
//     console.log('demo--mount')
//   }

//   componentDidUpdate() {
//     console.log('demo--update')
//   }

//   render() {
//     return (
//       <>
//         <div>Hook 开始</div>
//         <p>第二个hook useState</p>
//         <Content />
//       </>
//     )
//   }
// }

function Content(props) {
  const [count, setCount] = useState(10) // 初始化state, 只只初始化一次,

  const change = function () {
    setCount(count + 1) //  state 变量总是替换它而不是合并, React 保证了每次运行 effect 的同时，DOM 都已经更新完毕
  }
  const fetchList = useCallback(() => {
      console.log(count, 'fetch')
  }, [count]) // useCallback返回一个缓存函数，第二个参数count表示，当count改变会重新生成fetchList换存函数

  useEffect(() => { // 组件染后执行操作
    fetchList()
  }, [fetchList]) // 当fetchList换存函数变化时重新执行回调函数

  return (
    <>
      <div>
        <p>数量: {count}</p>
        <button onClick={change}>加</button>&nbsp;
        <button onClick={() => setCount(count - 1)}>减</button>
        <Child count={count} />
      </div>
    </>
  )
}

// class Content extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 10
//     }

//   }

//   componentDidMount() {
//     console.log('didMount', 111)
//   }

//   componentDidUpdate() {
//     console.log('didUpdate', 222)
//   }

//   change() {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }

//   render() {
//     console.log('content-render', 333)

//     return (
//       <>
//         <div>
//           <p>数量: {this.state.count}</p>
//           <button onClick={()=> this.change()}>加</button>
//         </div>
//       </>
//     )
//   }
// }



function Child(props) {
  console.log('child, 11')
  return (
    <div>{ props.count}</div>
  )
}
