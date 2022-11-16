import React, {Fragment} from "react";
import './demo.scss'
// Fragment 和<》></> 相当于vue的template标签
export default class myCom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.setMenu()
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
  componentDidMount() { }
  

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

            <RightContent />
          </div>
        </div>
      </div>
    )
  }
}

// class RightContent extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {}

//     this.submit = this.submit.bind(this)
//   }

//   submit(e) {
//     console.log(this, e, 111)
//     e.preventDefault()
//   }

//   change(type, e) {
//     console.log(type, e.target.value, 999)
//   }

//   render() {
//     return (
//       <form>
//         <p>
//           名字:&nbsp;
//           <input type="text" onChange={(e)=> this.change('name', e)}/>
//         </p>
//         <p>
//           性别:&nbsp;
//           <input type="radio" value="man" name="sex" onChange={(e)=> this.change('sex', e)}/>男
//           <input type="radio" value="woman"  name="sex" onChange={(e)=> this.change('sex', e)}/>女
//         </p>
//         <p>
//           <select onChange={(e)=> this.change('hoby', e)} value="saab">
//             <option value ="volvo">Volvo</option>
//             <option value ="saab">Saab</option>
//           </select>
//         </p>
//         <input type="submit" value="提交" onClick={this.submit}/>
//       </form>
//     )
//   }
// }

class RightContent extends React.Component {
  render() {
    return (
      <>
        <ul>
          <li>11111</li>
          <li>2222</li>
        </ul>
        {[2, 4].map((e) => {
          return (
            <Fragment key={e}>
            {/* 相当于空标签不会在页面显示 */}
            <div>{e}</div>
            <div>444444</div>
          </Fragment>
          )
        })}
      </>
    )
  }

}