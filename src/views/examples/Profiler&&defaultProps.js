import React, {Profiler} from 'react';
import '../assets/style/demo.scss'


// 无论是函数组件还是类组件都有defaultProps

// Profiler测试性能的组件
export default function Demo(props) {

  console.log(props, 111)
  const callback = (...args) => {
    console.log(args, 9999)  
  }

  return (
    <>
      <div>Demo组件</div>
      <Profiler id="con" onRender={callback}>
        <Content />
      </Profiler>
    </>
  )

}


Demo.defaultProps = {
  name: 'yyy'
}

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 1
    }
    console.log(props, 99911)
    this.changeNum = this.changeNum.bind(this)
  }

  changeNum() {
    this.setState((state)=> ({num: ++state.num}))
  }

  render() {
    return <div>
      <p>{this.state.num}</p>
      <button onClick={this.changeNum}>change</button>
    </div>
  }
}


Content.defaultProps = {
  mm: '223'
}


