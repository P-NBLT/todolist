import './App.css';
import React, { Component, useEffect } from 'react'
import InputBar from '../InputBar/InputBar';


class App extends Component {
    
  render() {
    return (
      <div className='body'>
          <h1>Todo List</h1>
        <InputBar />
        <div className='body2'>
        </div>
      </div>
    )
  }
}


export default App;
