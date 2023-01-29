import React, { useState, useReducer, useMemo } from 'react';
import '../assets/style/demo.scss'

/*
useMemo Hook: 把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算。

记住，传入 useMemo 的函数会在渲染期间执行。请不要在这个函数内部执行与渲染无关的操作，诸如副作用这类的操作属于 useEffect 的适用范畴，而不是 useMemo。

如果没有提供依赖项数组，useMemo 在每次渲染时都会计算新的值。

*/
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

// function Content(props) {
//   const [num, setNum] = useState(2)
//   return (
//     <>
//       <div>
//         值: {num}
//         <p><button onClick={()=>setNum(num + 1)}>年龄 + 2</button></p>
//       </div>
//     </>
//   )
// }


function init(initialCount) {
  return {count: initialCount};
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}


function Content() {
  const initialCount = 10
  // useReducer的第三个参数， 如下init 函数作为 useReducer 的第三个参数传入，这样初始 state 将被设置为 init(initialCount)
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  const [n, setNum] = useState(11)
  const mem = useMemo(() => {
    console.log(n, 111)
      return n + 1
  }, [n]) // useMem返回缓存，相当于vue的计算属性computed， 当n改变时重新执行方法，计算出新的mem的值

  return (
    <>
      Count: {state.count}---{n}---mem--{mem}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>
        Reset
      </button> &nbsp;&nbsp;
      <button onClick={() => dispatch({type: 'decrement'})}>&nbsp;-&nbsp;</button>&nbsp;&nbsp;
      <button onClick={() => dispatch({ type: 'increment' })}>&nbsp;+&nbsp;</button>

      <button onClick={() => setNum(n + 1)}>&nbsp;+&nbsp;</button>
    </>
  );
}



