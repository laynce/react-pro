import React from 'react'
import { createBrowserRouter} from 'react-router-dom'

import Login from '../views/Login'
import Layout from '../views/Layout'
const Introduce = React.lazy(() => import('../views/introduce'))
const Test = React.lazy(() => import('../views/demo'))
const Product = React.lazy(() => import('../views/test'))
const Routedesc = React.lazy(() => import('../views/routedesc'))
const Reduxdesc = React.lazy(() => import('../views/reduxdesc'))
const Error = React.lazy(() => import('../views/error'))

export  default createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/page",
    element: <Layout />,
    children: [
      {
        // path: "introduce",
        element: <Introduce />,
        index: true, // 带有index: true的可以和父路由共享url
      },
      {
        path: "product/:id",
        element: <Product />,
      },
      {
        path: "routedesc",
        element: <Routedesc />,
      },
      {
        path: "reduxdesc",
        element: <Reduxdesc />,
      },
      {
        path: "test",
        element: <Test />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />
  }]);
