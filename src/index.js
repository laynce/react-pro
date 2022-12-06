import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 *  React.StrictMode 目前有助于：
    识别不安全的生命周期
    关于使用过时字符串 ref API 的警告
    关于使用废弃的 findDOMNode 方法的警告
    检测意外的副作用
    检测过时的 context API,
    StrictMode自身不会渲染UI
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
