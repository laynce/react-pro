import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

const Standard = React.lazy(() => import('../views/demo'))
const Error = React.lazy(() => import('../views/error'))

export default function Router() {
  return (
    // 由于使用了懒加载，相当于是异步组件所以使用React.Suspense包裹
    <React.Suspense fallback={<h2>加载中...</h2>}>
      <BrowserRouter>
        <Routes>
          <Route path='/standard' element={<Standard />}></Route>
          <Route path='/error' element={<Error />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
   </React.Suspense>
  )
}