import './assets/style/common.scss'
import './App.css';
import React from 'react'
import Router from './router'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>弗雷云数字中台</h2>
          <Router />
        </header>
      </div>
    );
  }
}

