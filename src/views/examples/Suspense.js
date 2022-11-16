import {Component} from "react";


class Child extends Component {
  render() {
    console.log("更新child")
    return (
      <div>
        Child组件
        <div className="red">子组件</div>
      </div>
    )
  }
}


export {Child as default}