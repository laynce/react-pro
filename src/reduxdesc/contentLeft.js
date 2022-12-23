import { Card,Button } from "antd";
import {useSelector, useDispatch} from 'react-redux'
import {incrementByAmount, changeDetail} from './store/couterSlice'
export default function Content() {
  const info = useSelector(state => {
    return {
      ...state.counterReducer
    }
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
      实时的count得值: {info.count} <br />
      实时的detail得值: {info.detail.age}----{info.detail.name} <br />
      <Button type="primary" onClick={()=> dispatch({type: 'counter/increment'})} className="mr-5">改变store的count值</Button>
      <Button type="primary" onClick={() => dispatch(incrementByAmount(5))} className="mr-5">count + 5</Button>
      <Button type="primary" onClick={() => dispatch({ type: 'counter/incrementByAmount', payload: 10 })} className="mr-5">count + 10</Button>
      <Button type="primary" onClick={() => dispatch(changeDetail())} className="mr-5">改变detail</Button>
    </Card>
  </>
}