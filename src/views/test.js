import {useReducer} from 'react'
import { reducer, initState } from './reduce/reduce'

export default function Model() {
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <>建模11
      <div>
        值: 年龄: {state.age}---年份：{state.year}
        <p><button onClick={()=> dispatch({type: 'increase', val: 2})}>年龄 + 1</button></p>
        <p><button onClick={()=> dispatch({type: 'decrease'})}>年龄 - 1</button></p>
        <p><button onClick={()=> dispatch({type: 'increaseYear'})}>年份 + 1</button></p>
        <p><button onClick={()=> dispatch({type: 'decreaseYear'})}>年龄 - 1</button></p>
      </div>

    </>
  )
}