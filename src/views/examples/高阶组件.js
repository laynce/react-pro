import React from 'react';
import '../assets/style/demo.scss'
import { useState, useEffect } from 'react' 

export default function Demo(props) {
  const [flag, setFlag] = useState(true)
  return (
    <>
      <div>Hook 开始</div>
      <p>第二个hook useEffect</p>
      <button onClick={()=> setFlag(false)}>清楚定时器</button>
      {flag ? <Content /> : ''}
    </>
  )

}

function Content(props) {
 

  return (
    <>
      <div>
       <Num1 />
       <Num2 />
      </div>
    </>
  )
}

const Num1 = Com(function (props) {
  return (
    <p>Num1数量: {props.date }</p>
  )
}, 10)

console.log(Num1)
const Num2 = Com(function (props) {
  return (
    <p>Num2数量: {props.date }</p>
  )
}, 1000)


function Com(InnerCom, date) {
  class Hign extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        date
      }

      this.change = this.change.bind(this)
    }

    change() {
      this.setState(state => ({
        date: state.date + 1
      }))
    }
  
    render() {
      return (
        <div>
          <button onClick={this.change}>加</button>
          <InnerCom change={this.change} date={this.state.date} />
        </div>
      )
    }
  }

  return Hign
}
