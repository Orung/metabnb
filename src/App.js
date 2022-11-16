import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import "./App.css";
import Thumbnails from "./components/thumbnails.js";
import img1 from "./images/image-3.png";
import img2 from "./images/image-4.png";
import img3 from "./images/image-5.png";
import img4 from "./images/image-6.png";
import logo1 from "./images/partner-logo-1.svg";
import logo2 from "./images/partner-logo-2.svg";
import logo3 from "./images/partner-logo-3.png";
import metaImg from "./images/meta-img.png";
import Footer from "./layout/footer";
import Accordion from './components/Accordion'
import Header from './layout/navbar'


function App() {

  return (
    <div className="App">
      <Header />
      <Container className="my-5">
        <div className="row my-5">
          <div className="col-12 col-md-6 col-lg-6">
            <h1 className="my-5 fw-bold">
              Rent a <span className="text-red">Place</span> away from{" "}
              <span className="text-red">Home</span> in the{" "}
              <span className="text-red">Metaverse</span>
            </h1>
            <p className="mb-5">
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
            <Form className="d-flex">
              <Form.Control
                type="search"
                className="form-control-end"
                placeholder="Search"
                aria-label="Search"
              />
              <Button className="px-5 form-control-start" variant="primary">
                Search
              </Button>
            </Form>
          </div>
          <div className="col-12 col-md-1 col-lg-1"></div>
          <div className="col-12 col-md-5 col-lg-5 text-end">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 pt-5 text-last">
                <div className="w-100 mb-2">
                  <img src={img2} alt="house" className="img-fluid"/>
                </div>
                <div className="w-100 mb-2">
                  <img src={img1} alt="house" className="img-fluid"/>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 text-start">
                <div className="w-100 mb-2">
                  <img src={img4} alt="house" className="img-fluid" />
                </div>
                <div className="w-100 mb-2">
                  <img src={img3} alt="house" className="img-fluid"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-red">
        <Container className="my-5">
          <div className="d-flex flex-wrap gap-3 align-item-center justify-content-between py-2">
            <div>
              <img src={logo1} alt="partner logo" />
            </div>
            <div>
              <img src={logo2} alt="partner logo" />
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <img src={logo3} alt="partner logo" />
              <span className="logo-font">OpenSea</span>
            </div>
          </div>
        </Container>
      </div>
      <Thumbnails></Thumbnails>
      <div className="bg-red py-5 mt-5 text-white">
        <Container>
          <div className="row py-5">
            <div className="col-12 col-md-6 mb-4">
              <h3 className="meta-title my-5">Metabnb NFTs</h3>
              <p className="meta-text mb-5">
                Discover our NFT gift cards collection. Loyal customers gets
                amazing gift cards which are traded as NFTs. These NFTs gives
                our cutomer access to loads of our exclusive services.
              </p>
              <button className="btn btn-more py-2 px-4">Learn more</button>
            </div>
            <div className="col-12 col-md-6">
              <img src={metaImg} alt="metabnb" className="img-fluid" />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default App;
