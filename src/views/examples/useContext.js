import React, { useContext, useState } from 'react';
import '../assets/style/demo.scss'

// useContext 让你能够读取 context 的值以及订阅 context 的变化
const contextTheme = React.createContext({
  color: 'red',
  name: 'aaa'
})

export default function Demo(props) {
  const [flag, setFlag] = useState(true)
  const [val, setVal] = useState({ color: 'blue',
    name: 'ccc'
  })
  return (
    <>
      <div>Hook 开始</div>
      <p>useContext</p>
      <contextTheme.Provider value={val}>
        <button onClick={()=> setFlag(false)}>清楚Content</button>
        <button onClick={()=> setVal({...val, ...{name: val.name + 'b'}})}>改变contextTheme</button>
        {flag ? <Content /> : ''}
        <Content />
      </contextTheme.Provider>
    </>
  )

}

function Content(props) {
  const [num, setNum] = useState(1)
  const context = useContext(contextTheme)
  console.log(context, 11)
  return (
    <>
      <div>
        值: {num}
        <p><button onClick={()=> setNum(num + 1)}>+1</button></p>
      </div>
    </>
  )
}



