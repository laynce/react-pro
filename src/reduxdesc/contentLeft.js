import { Card,Button } from "antd";
import {useSelector, useDispatch} from 'react-redux'
import {incrementByAmount} from './store/couterSlice'
export default function Content() {
  const count = useSelector(state => {
    return state.counterReducer.count
  })

  const dispatch = useDispatch()
   /**
    *  // 两种不同的调用方式都可以
    * a. type: Slice的name/reducer名称
      dispatch({ type: 'counter/incrementByAmount', payload: 10 })
    *  
    * b. dispatch(reducer方法调用(param)) , param就是payload的action, 
    */

  return <>
    <Card title='内容一'>
      实时的count得值: {count} <br />
      <Button type="primary" onClick={()=> dispatch({type: 'counter/increment'})} className="mr-5">改变store的count值</Button>
      <Button type="primary" onClick={() => dispatch(incrementByAmount(5))} className="mr-5">count + 5</Button>
      <Button type="primary" onClick={() => dispatch({ type: 'counter/incrementByAmount', payload: 10 })}>count + 10</Button>
    </Card>
  </>
}