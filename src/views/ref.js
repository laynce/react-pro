import React, {Fragment, createRef} from "react";
import './demo.scss'

export default class myCom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
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
            <RightContent ref={ this.rightContentRef} />
          </div>
        </div>
      </div>
    )
  }
}

class RightContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.hanleClcik = this.hanleClcik.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  hanleClcik() {
    this.setState((currentState) => ({
      isOpen: !currentState.isOpen
    }))
  }

  handleFocus() {

  }

  handleBlur() {
    console.log(999, 111)
    this.timer = setTimeout(() => {
      this.setState({
        isOpen: false
      })
    })
  }

  render() {
    return (<div>
      <button>切换1</button>
      <div onBlur={this.handleBlur} onFocus={this.handleFocus}>
        <button onClick={this.hanleClcik}>切换</button>
      </div>
      
      <button>切换2</button>
     { this.state.isOpen && (<ul>
        <li>1111</li>
        <li>22222</li>
        <li>333333</li>
      </ul>)}
    </div>)
  }

}