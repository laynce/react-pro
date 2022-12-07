import React, { useState, useReducer } from 'react';
import '../assets/style/demo.scss'

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

  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}



