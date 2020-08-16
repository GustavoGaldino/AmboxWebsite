import React from 'react';

import NavbarLinks from './components/NavbarLinks/index.jsx'
import Navbar from 'react-bootstrap/Navbar'

import AmboxLogo from './components/Logo/index.jsx'
import Landing from './components/Landing/index.jsx'
import AboutUs from './components/About/index.jsx'
import Reviews from './components/Reviews/index.jsx'
import Plans from './components/Plans/index.jsx'
import Login from './components/Login/index.jsx'

import './assets/styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">

        <Navbar bg="light" fixed="top">

          <Navbar.Brand>
            <AmboxLogo />
          </Navbar.Brand>

          <NavbarLinks onHomePage />
        </Navbar>

        <Switch>
          <Route exact path='/'>
            <Landing />
            <AboutUs />
            <Plans />
            <Reviews />
          </Route>

          <Route exact path='/login'>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
