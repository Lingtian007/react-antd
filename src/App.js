
import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import "./style.less";
class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
