import React from 'react';
import Landing from './components/Landing/index.jsx'
import NavbarLinks from './components/NavbarLinks/index.jsx'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import AmboxLogo from './components/Logo/index.jsx'

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
      <Landing />
    </div>
  );
}

export default App;
