import React, { Component } from 'react';
import './App.css';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
        <Portfolio />
      </div>
    );
  }
}

export default App;
