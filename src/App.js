import './assets/style/common.scss'
import './App.scss';
import React from 'react'
import router from './router'
import {
  RouterProvider,
} from "react-router-dom";
export default class App extends React.Component {
  render() {
    return (
      <React.Suspense fallback={<h2>加载中...</h2>}>
        <div className="App">
          <RouterProvider router={router}/>
        </div>
      </React.Suspense>
    );
  }
}

