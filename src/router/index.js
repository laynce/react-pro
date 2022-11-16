import React from 'react'
import { Route, Routes, BrowserRouter} from 'react-router-dom'

const Login = React.lazy(() => import('../views/Login'))
const Layout = React.lazy(() => import('../views/Layout'))
const Standard = React.lazy(() => import('../views/demo'))
const Error = React.lazy(() => import('../views/error'))

export default function Router({children}) {
  return (
    // 由于使用了懒加载，相当于是异步组件所以使用React.Suspense包裹
    <React.Suspense fallback={<h2>加载中...</h2>}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/page' element={<Layout />}>
          {/* index 如果仅匹配了父级别路由，则默认会展示含有index属性的子路由 */}
            <Route index element={<Standard />}></Route>
            <Route path='standard' element={<Standard />}></Route>
          </Route>
          <Route path='/error' element={<Error />}></Route>
          <Route path='*' element={<Error />}></Route>
          </Routes>
      </BrowserRouter>
   </React.Suspense>
  )
}