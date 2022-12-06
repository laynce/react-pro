import React from 'react';
import '../assets/style/demo.scss'
import { useState, useEffect} from 'react' 

export default function Demo(props) {
  const [flag, setFlag] = useState(true)
  return (
    <>
      <div>Hook 开始</div>
      <p>自定义Hook</p>
      <button onClick={()=> setFlag(false)}>清楚定时器</button>
      {flag ? <Content /> : ''}
    </>
  )

}

function Content(props) {
  const [val, coe, setCoe] = useCount(1, 2) // 传入一个值降得到这个值的幂
  return (
    <>
      <div>
        值：{val}---{coe}
        <p><button onClick={()=> setCoe(coe + 1)}>改变val</button></p>
      </div>
    </>
  )
}

// 自定义Hook必须以use开头，hook本质是函数，在自定义hook顶层可以使用其他的hook
function useCount(val, coe) {
  const [value, setVal] = useState(val)
  const [coeVlaue, setCoe] = useState(coe)

  const setCoeFn = (n) => {
    setCoe(n)
    setVal(value + n)
  }

  useEffect(() => {
    console.log(value, coeVlaue)
  })
  return [
    value,
    coeVlaue,
    setCoeFn
  ]

}
