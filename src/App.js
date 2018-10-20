import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import {Todo1} from './todos/to-do1.jsx';
// import {Todo2} from './todos/to-do2.jsx';
// import {Todo3} from './todos/to-do3.jsx';
// import {Todo4} from './todos/to-do4.jsx';
import {Shared} from './todos/shared';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Shared name='Winnie' className='user-name-1'/>
        <Shared name='Bob' className='user-name-2'/>
        <Shared name='Thomas' className='user-name-3'/>
        <Shared name='George' className='user-name-4'/>
      </div>
    );
  }
}

export default App;
