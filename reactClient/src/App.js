import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import socket from './utilities/socketConnection';
import Widget from './Widget';

class App extends Component {
  constructor(){
    super();
    this.state = {
      performanceData: {}
    }
  }

  componentDidMount(){
    socket.on('data',(data)=>{
      //console.log(data)''
    })
  }

  render() {
   <>
      <h1> Hi</h1>
   </>
  }
}

export default App;
