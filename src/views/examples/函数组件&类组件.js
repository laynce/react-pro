import React from 'react'

// 类组件
export default class Mycom extends React.Component{
  render() {
    console.log(this.props,999)
    const { name, age, className } = this.props
    const ele = <Myele id="myele"><Myele23></Myele23></Myele>
    return (
      <div>
        <h3>类组件</h3>
        <p className={className}>{name}---{age}</p>
        {ele}
      </div>
    )
  }
}

// 函数组件
function Myele(props) {
    console.log(props,111)
  const {name, age, className, children} = props
  return (
    <div>
      <h3>函数组件</h3>
      <p className={className}>{name}---{age}</p>
      <div>{children}</div>
    </div>
  )
}

// 函数组件
function Myele23(props) {
  console.log(props,111)
const {name, age, className} = props
return (
  <div>
    <h3>函数组件2323</h3>
    <p className={className}>{name}---{age}</p>
  </div>
)
}


// 函数组件
// export default function mycom(props) {
//   console.log(props,111)
// const {name, age, className} = props
// return (
//   <div>
//     <h3>函数组件</h3>
//     <p className={className}>{name}---{age}</p>
//   </div>
// )
// }
