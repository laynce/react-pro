import React from "react";
import './demo.scss'

const commonContext = React.createContext({
    background: 'red'
})

export default class myCom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: {
        background: 'blue'
      }
    }
    this.setMenu()
    this.themeChange = this.themeChange.bind(this)
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

  themeChange() {
    console.log(1111, `rgb(${parseInt(255 * Math.random())}, ${parseInt(255 * Math.random())}, ${parseInt(255 * Math.random())})`)
    this.setState({
      theme: {
        background: `rgb(${parseInt(255 * Math.random())}, ${parseInt(255 * Math.random())}, ${parseInt(255 * Math.random())})`
      }
    })
  }

  componentDidMount() {}
  
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
          <commonContext.Provider value={this.state.theme}>
            <RightContent change={this.themeChange} />
          </commonContext.Provider>
          <RightContent />
        </div>
      </div>
    </div>
    )
  }
}

class RightContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <ToolButton onClick={this.props.change} />
    )
  }
}


class ToolButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    console.log(this.context.background)
    return (
      <div>
        <h3>点击</h3>
        <div {...this.props} style={{background: this.context.background}}>change</div>
     </div>
    )
  }
}


ToolButton.contextType = commonContext