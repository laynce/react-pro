import { Card,Button } from "antd";
import { useSelector, useDispatch } from 'react-redux'

import {asyIncrease} from './store/couterSlice'
export default function Content() {
  const count = useSelector(state => {
    return state.counterReducer.count
  })

  const detail = useSelector(state => {
    return state.counterReducer.detail
  })

  const dispatch = useDispatch()

  return <>
    <Card title='内容二'>
      获取count得值: {count} <br />
      实时count得值: {count} <br />
      获取的detail得值: {detail.age}----{detail.name} <br />
      <Button type="primary" onClick={() => dispatch({ type: 'counter/increment' })} className="mr-5">改变store的count值</Button>
      <Button type="primary" onClick={() => dispatch({ type: 'counter/decrement' })} className="mr-5">count - 1</Button>
      <Button type="primary" onClick={() => dispatch(asyIncrease(100))}>异步count + 100</Button>
    </Card>
  </>
}