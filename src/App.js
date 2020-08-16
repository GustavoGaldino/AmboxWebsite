import React from 'react';

import NavbarLinks from './components/NavbarLinks/index.jsx'
import Navbar from 'react-bootstrap/Navbar'

import AmboxLogo from './components/Logo/index.jsx'
import Landing from './components/Landing/index.jsx'
import AboutUs from './components/About/index.jsx'
import Reviews from './components/Reviews/index.jsx'
import Plans from './components/Plans/index.jsx'

import './assets/styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" fixed="top">

        <Navbar.Brand>
          <AmboxLogo />
        </Navbar.Brand>

        <NavbarLinks />

      </Navbar>
      <Landing />
      <AboutUs />
      <Plans />
      <Reviews />
    </div>
  );
}

export default App;
