import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom'

import './App.css';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import Four_o_Four from './components/Four_o_Four.jsx';

let Navi = () => {
  return (
    <nav>
    <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li><Link to="/404">404</Link></li> 
          <li><a href="http://www.google.com" target="_blank">Google (External Link)</a></li>
    </ul>
    </nav>
    )
}
class App extends Component {
  render() {
    return (
      <Router>
      <div id="wrapper">
      <Navi/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/aboutus" component={About}></Route>
          <Route path="/portfolio" component={Portfolio}></Route>
          <Route path="/404" component={Four_o_Four}></Route>
        </Switch>
     </div>
      </Router>
    );
  }
}

export default App;