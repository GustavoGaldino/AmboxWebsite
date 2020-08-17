import React from 'react';

import NavbarLinks from './components/NavbarLinks/index.jsx'
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom'

import AmboxLogo from './components/Logo/index.jsx'
import Landing from './components/Landing/index.jsx'
import AboutUs from './components/About/index.jsx'
import Reviews from './components/Reviews/index.jsx'
import Plans from './components/Plans/index.jsx'
import Login from './components/Login/index.jsx'
import Logged from './components/Logged/index.jsx'
import FirstView from './components/Register/FirstView/index.jsx'
import SecondView from './components/Register/SecondView/index.jsx'
import ThirdView from './components/Register/ThirdView/index.jsx'

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

        <Switch>
          <Route exact path='/AmboxWebsite/'>
            <Navbar bg="light" fixed="top">

              <Navbar.Brand>
                <AmboxLogo />
              </Navbar.Brand>

              <NavbarLinks onHomePage />
            </Navbar>
            <Landing />
            <AboutUs />
            <Plans />
            <Reviews />
          </Route>

          <Route exact path='/AmboxWebsite/login'>
            <Navbar bg="light" fixed="top">

              <Navbar.Brand>
                <AmboxLogo />
              </Navbar.Brand>

              <NavbarLinks onHomePage />
            </Navbar>
            <Login />
          </Route>

          <Route exact path='/AmboxWebsite/logged'>
            <Logged />
          </Route>

          <Route exact path='/AmboxWebsite/register/first-view'>
            <FirstView />
          </Route>

          <Route exact path='/AmboxWebsite/register/second-view'>
            <SecondView />
          </Route>

          <Route exact path='/AmboxWebsite/register/third-view'>
            <ThirdView />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
