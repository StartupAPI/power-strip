// enables async/await
import "regenerator-runtime/runtime.js";

import React from "react";
import ReactDOM from "react-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import { getPowerStrip } from "./index";
import theme from "./themes/bootstrap4.js";

const powerStrip = getPowerStrip(theme);

const App = () => (
  <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Power Strip Sample React App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="">Home</Nav.Link>
          <Nav.Link href="">Link</Nav.Link>
        </Nav>
        {powerStrip}
      </Navbar.Collapse>
    </Navbar>
    <Container fluid>
      This is a simple React-based SPA which uses Power Strip component.
    </Container>
  </>
);

ReactDOM.render(<App />, document.getElementById("app"));
