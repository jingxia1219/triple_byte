import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Todo1} from './todos/to-do1.jsx';
import {Todo2} from './todos/to-do2.jsx';
import {Todo3} from './todos/to-do3.jsx';
import {Todo4} from './todos/to-do4.jsx';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Todo1 />
        <Todo2 />
        <Todo3 />
        <Todo4 />
      </div>
    );
  }
}

export default App;
