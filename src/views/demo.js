import React, { useState } from 'react';
import { Button } from 'antd'
import { Link, useNavigate} from 'react-router-dom'
import '../assets/style/demo.scss'

export default function Demo(props) {

  return (
    <>
      <div>Hook 开始</div>
      <p>useRef</p>
      <Content />
    </>
  )

}


function Content() {
  const [n, setNum] = useState(11)
  const navigate = useNavigate()
  console.log(navigate)
  const go = () => {
    navigate('/page/product/6?aa=900', {
      state: {
        ss: 233223 // state传参
      }})
  }

  return (
    <>
      <div> 
        <p>Count: {n} &nbsp;<Button onClick={() => setNum(n + 1)} type="primary">&nbsp;+ 1&nbsp;</Button></p>
        <p className='mt-5'><Button><Link to={'/page/product/' + n}>访问Hook, 动态路由传参</Link></Button></p>
        <p className='mt-5'><Link to={'/page/product/' + n} state={{sex: 'man',age: '12'}}>跳转Hook,Sate传参</Link></p>
        <p className='mt-5'><Button onClick={go}>navigate跳转</Button></p>
      </div>
    </>
  );
}

