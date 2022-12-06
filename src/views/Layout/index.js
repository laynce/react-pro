import React, {} from "react";
import '../../assets/style/demo.scss'
import { Outlet, useNavigate } from 'react-router-dom'

// Outlet 渲染子路由元素
export default function Layout() { 
  let menu = []
  const navigate = useNavigate()

  const setMenu = () => {
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
    
    menu = menuLists.map((m, index) => (
      <h4 url={ m.url} className='mt-10 pointer' key={index} onClick={go}>{ m.name}</h4>
    ))
  }

  const go = (e) => {
    const url = e.target.getAttribute('url')
    navigate(`/page/${url}`)
  }

  setMenu()
  
  return (
    <div className="page">
      <h3>菜单</h3>
      <div>
        <div>
          {
            menu
          }
        </div>
        <div className="page-right">
          <Outlet />
        </div>
      </div>
    </div>
  )
}