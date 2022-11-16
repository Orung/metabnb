import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import "../App.css";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo.png";
import Accordion from '../components/Accordion'



function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0 gap-5"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/" className="nav-font text-decoration-none">Home</Link>
              <Link to="/places" className="nav-font text-decoration-none">Place to stay</Link>
              <Link href="#" className="nav-font text-decoration-none">NFTs</Link>
              <Link href="#" className="nav-font text-decoration-none">Community</Link>
            </Nav>
            <div className="d-flex">
              <Button variant="primary" onClick={handleShow}>Connect wallet</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Connect Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Choose your preferred wallet:</p>
          <Accordion />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;
