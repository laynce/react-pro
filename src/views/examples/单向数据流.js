import React from 'react'

export default class Mycom extends React.Component {
  timer = null
  constructor(props) {
    super(props)
    this.state = {
      date: new Date().toLocaleTimeString()
    }
  }

  tick() {

    this.setState({
      date: new Date().toLocaleTimeString()
    })
  }

  componentDidMount() {
    this.timer = setInterval(()=> this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div>
        <h3>子组件是时钟组件</h3>
        <Clock date = {this.state.date}></Clock>
      </div>
    )
  }
}

// 时钟组件
class Clock extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>{ this.props.date}</div>
    )
  }
}