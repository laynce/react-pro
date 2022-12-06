import React from "react";
import '../assets/style/demo.scss'

export default function Demo(props) {
  const contentRef = React.createRef()

  setTimeout(() => {
    console.log(contentRef, 8888)
  })
  return (
    <div>
      函数组件

      <Content ref={contentRef} value="aa"/>
    </div>
  )
}


const Content = React.forwardRef((props, ref)=> {

  return (
    <div>
      <div>5555</div>
    </div>
  )
})

// --------------------------------------

// React.forwardRef 官方不推荐使用
  // myForWard名字为了在react-devtool里面显示
// const Content = React.forwardRef(function myForWard(props, ref){

//   return (
//     <div>
//       <div>5555</div>
//     </div>
//   )
// })

// ----------------------------------------

// function myForWard(props, ref){

//   return (
//     <div>
//       <div>5555</div>
//     </div>
//   )
// }

// myForWard.displayName = 'ssss' // 这样也可以在在react-devtool里面显示名称
// const Content = React.forwardRef(myForWard)