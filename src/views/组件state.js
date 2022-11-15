import React from 'react'

// 组件state
// 自定义时钟
export default class Mycom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date().toLocaleTimeString(),
      title: "当前时间"
    }
  }
  
  showDate() {
    this.clock = setInterval(() => {
      console.log(1111)
      this.setState({
        date: new Date().toLocaleTimeString()
      })
    })
  } 

  componentDidMount() {
    this.showDate()
  }

  componentWillUnmount() {
    clearInterval(this.clock)
  }

  render() {
    console.log(this.props.name)
    const {title, date } = this.state
    return (
      <div>
        <h3>{title}: {date}---{ this.props.name}</h3>
      </div>
    )
  }
}