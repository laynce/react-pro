import React from "react";
import '../../assets/style/demo.scss'
import { Outlet } from 'react-router-dom'

// Outlet 渲染子路由元素
export default class Layout extends React.Component {
  constructor(props) {
    super(props)
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
            <Outlet />
          </div>
        </div>
    </div>
    )
  }
}