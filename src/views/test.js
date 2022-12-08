import { Card } from 'antd'
import {useReducer, useState} from 'react'
import { reducer, initState } from './reduce/reduce'
import { useParams, useLocation, useSearchParams} from 'react-router-dom'
import { Button } from 'antd'

export default function Model() {
  const [state, dispatch] = useReducer(reducer, initState) // state是独立的
  const [num, setNum] = useState(10)
  const param = useParams() // 可以获取当前动态路由的参数

  const [searchParam] = useSearchParams() // 可以获取get传参
  const stateParam = useLocation().state // 通过state传递的参数接受，刷新也不会丢失
  console.log('query传参：', searchParam.get('aa'), 'state传参:', stateParam, '动态路由传参:', param)
  return (
    <>
      <Card title='Hook-useState'>
        <div>
          <p> 初始值: {num}</p>
          <p className='mt-5'><Button type="primary" onClick={()=> setNum(num * 2)}>num的2倍</Button></p>
        </div>
      </Card>
      <br />
      <Card title='Hook-useReducer'>
        <div>
          <p>值: 年龄: {state.age}---年份：{state.year}</p>
          <p className='mt-5'><Button type="primary" onClick={()=> dispatch({type: 'increase', val: 2})}>年龄 + 1</Button></p>
          <p className='mt-5'><Button onClick={()=> dispatch({type: 'decrease'})}>年龄 - 1</Button></p>
          <p className='mt-5'><Button type="primary" onClick={()=> dispatch({type: 'increaseYear'})}>年份 + 1</Button></p>
          <p className='mt-5'><Button onClick={()=> dispatch({type: 'decreaseYear'})}>年龄 - 1</Button></p>
        </div>
      </Card>
    </>
  )
}