import React, { useReducer, useState } from 'react';
import '../assets/style/demo.scss'
import { reducer, initState } from '../reduce/reduce'

export default function Demo(props) {
  const [flag, setFlag] = useState(true)
  const [val, setVal] = useState({ color: 'blue',
    name: 'ccc'
  })
  return (
    <>
      <div>Hook 开始</div>
      <p>自定义Hook</p>
        <button onClick={()=> setFlag(false)}>清楚Content</button>
        <button onClick={()=> setVal({...val, ...{name: val.name + 'b'}})}>改变contextTheme</button>
        {flag ? <Content /> : ''}
        <Content />
    </>
  )

}

function Content(props) {
  const [state, dispatch] = useReducer(reducer, initState) // 独立的，虽然两个组件都用了同一个reducer, initState，但他们是独立的，互不影响，有独立的state和dispatch

  return (
    <>
      <div>
        值: 年龄: {state.age}---年份：{state.year}
        <p><button onClick={()=> dispatch({type: 'increase', val: 2})}>年龄 + 2</button></p>
        <p><button onClick={()=> dispatch({type: 'decrease'})}>年龄 - 1</button></p>
        <p><button onClick={()=> dispatch({type: 'increaseYear'})}>年份 + 1</button></p>
        <p><button onClick={()=> dispatch({type: 'decreaseYear'})}>年龄 - 1</button></p>
      </div>
    </>
  )
}



