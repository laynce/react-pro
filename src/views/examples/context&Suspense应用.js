import React, {Suspense, createRef} from "react";
import './demo.scss'

const Child = React.lazy(() => import('./Suspense'))
const commonContext = React.createContext({
    val: 9
})

commonContext.displayName = 'MyDisplayName'; // 设置个别名，方便调试
console.log(React.Fragment, 11)
export default class myCom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      config: {
        val: 1,
        age: 12
      }
    }
    this.setMenu()
    this.rightContentRef = createRef()
  }

  setMenu() {
    const menuLists = [{
      name: '标准管理',
      url: 'standard'
    },
    {
      name: '建模管理',
      url: 'model'
    },
    {
      name: '数据源管理',
      url: 'dataOrigin'
    }]
    
    this.menu = menuLists.map((m, index) => (
      <h4 url={ m.url} className='mt-10' key={index}>{ m.name}</h4>
    ))
  }

  componentDidMount() { 
    console.log(this.rightContentRef, 9999)

    setTimeout(() => {
      this.setState({
        config: {
          val: 100,
          age: 1211
        }
      })
    }, 6e3)
  }
  

  render() {
    return (
      <div className="page">
        <h3>菜单</h3>
        <div>
          <div>
          {
            this.menu
          }
          </div>

          <div className="page-right">
          {/* 当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染。 */}
            <commonContext.Provider value={this.state.config}>
              <RightContent />
            </commonContext.Provider>
          </div>
        </div>
      </div>
    )
  }
}

// class RightContent extends React.Component {
//   static contextType = commonContext // 匹配最近的Provider,如果么有Provider则 this.context 才会取commonContext的默认值,能匹配到的话就取provider的value值,
//   constructor(props) {
//     super(props)
//     this.state = {
//       isOpen: false
//     }
//     this.hanleClcik = this.hanleClcik.bind(this);
//     this.handleFocus = this.handleFocus.bind(this);
//     this.handleBlur = this.handleBlur.bind(this);

//   }

//   hanleClcik() {
//     this.setState((currentState) => ({
//       isOpen: !currentState.isOpen
//     }))
//   }

//   handleFocus() {}

//   handleBlur() {
//     console.log(999, 111)
//     this.timer = setTimeout(() => {
//       this.setState({
//         isOpen: false
//       })
//     })
//   }

//   render() {
//     console.log(RightContent.contextType, 888, this.context)
//     return (<div>
//       <div onBlur={this.handleBlur} onFocus={this.handleFocus}>
//         <button onClick={this.hanleClcik}>
//           <span className="red">切换</span>
//         </button>
//       </div>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Child />
//       </Suspense>

//     </div>)
//   }

// Suspense可以包裹一步组件
// }


function RightContent(props) {
  //commonContext.Consumer,可以用在函数组件，返回的是react节点 匹配最近的Provider,如果么有Provider 则value 才会取commonContext的默认值,能匹配到的话就取provider的value值, */}
    return (

      <commonContext.Consumer>
        {
          value => (<div>
            <div>{value.val}</div>
          </div>)
        }
      </commonContext.Consumer>
    )
  }