import { Card } from "antd";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'

export default function RedCom() {
  return <>
    <Provider store={store}>
      <Card title="redux使用">
        <Link to='' className="mr-20">查看内容一</Link>
        <Link to='content'>查看内容二</Link>
        <Outlet />
      </Card>
    </Provider>
  </>
}