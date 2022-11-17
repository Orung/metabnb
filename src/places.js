import Container from "react-bootstrap/Container";
import "./App.css";
import Header from "./layout/navbar";
import Footer from "./layout/footer";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import thumnail1 from "./images/places/grid1.png";
import thumnail2 from "./images/places/grid2.png";
import thumnail3 from "./images/places/grid3.png";
import thumnail4 from "./images/places/grid4.png";
import thumnail5 from "./images/places/grid5.png";
import thumnail7 from "./images/places/grid7.png";
import thumnail8 from "./images/places/grid8.png";
import thumnail9 from "./images/places/grid9.png";
import thumnail10 from "./images/places/grid10.png";
import thumnail11 from "./images/places/grid11.png";
import thumnail12 from "./images/places/grid12.png";
import thumnail13 from "./images/places/grid13.png";
import thumnail14 from "./images/places/grid14.png";
import thumnail15 from "./images/places/grid15.png";
import thumnail16 from "./images/places/grid16.png";
import thumnail17 from "./images/places/grid17.png";
import rate from "./images/likes.png";

function Places() {
  const thumnailContent = [
    {
      thumnail: thumnail1,
      rate: rate,
    },
    {
      thumnail: thumnail2,
      rate: rate,
    },
    {
      thumnail: thumnail3,
      rate: rate,
    },
    {
      thumnail: thumnail4,
      rate: rate,
    },
    {
      thumnail: thumnail5,
      rate: rate,
    },
    {
      thumnail: thumnail7,
      rate: rate,
    },
    {
      thumnail: thumnail8,
      rate: rate,
    },
    {
      thumnail: thumnail9,
      rate: rate,
    },
    {
      thumnail: thumnail10,
      rate: rate,
    },
    {
      thumnail: thumnail11,
      rate: rate,
    },
    {
      thumnail: thumnail12,
      rate: rate,
    },
    {
      thumnail: thumnail13,
      rate: rate,
    },
    {
      thumnail: thumnail14,
      rate: rate,
    },
    {
      thumnail: thumnail15,
      rate: rate,
    },
    {
      thumnail: thumnail16,
      rate: rate,
    },
    {
      thumnail: thumnail17,
      rate: rate,
    },
  ];
  return (
    <div className="App">
      <Header />

      <div className="pt-4">
      <Container className="my-5 position-relative">
        <div
          className="d-flex justify-content-between border gap-3 rounded p-2 position-absolute-lg"
          style={{ right: "10px" }}
        >
          <span className="location">Location</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.9999 5L10.9999 5"
              stroke="#333333"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.99985 5H1.99985"
              stroke="#333333"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.9999 12H16.9999"
              stroke="#333333"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.9999 12H1.99985"
              stroke="#333333"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.9999 19H10.9999"
              stroke="#333333"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.99985 19H1.99985"
              stroke="#333333"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.9999 21V17"
              stroke="#333333"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.9999 7V3"
              stroke="#333333"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.0001 14V10"
              stroke="#333333"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="my-5"
        >
          <Tab eventKey="home" title="Resturant">
            <div className="row">
              {thumnailContent.map((thumbnailcon) => (
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <div className="border rounded-15 p-2">
                    <div className="p-2">
                      <img
                        src={thumbnailcon.thumnail}
                        className="size-img"
                        alt="thumbnail"
                      />
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="f-12">Desert king</p>
                      <p className="f-12">
                        <b>1MBT per night</b>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="f-12">2345km away</p>
                      <p className="f-12">available for 2weeks stay</p>
                    </div>
                    <div>
                      <img src={thumbnailcon.rate} alt="rating star" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="profile" title="Cottage"><div className="row">
              {thumnailContent.map((thumbnailcon) => (
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <div className="border rounded-15 p-2">
                    <div className="p-2">
                      <img
                        src={thumbnailcon.thumnail}
                        className="size-img"
                        alt="thumbnail"
                      />
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="f-12">Desert king</p>
                      <p className="f-12">
                        <b>1MBT per night</b>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="f-12">2345km away</p>
                      <p className="f-12">available for 2weeks stay</p>
                    </div>
                    <div>
                      <img src={thumbnailcon.rate} alt="rating star" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </Tab>
          <Tab eventKey="castle" title="Castle">
          <div className="row">
              {thumnailContent.map((thumbnailcon) => (
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <div className="border rounded-15 p-2">
                    <div className="p-2">
                      <img
                        src={thumbnailcon.thumnail}
                        className="size-img"
                        alt="thumbnail"
                      />
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="f-12">Desert king</p>
                      <p className="f-12">
                        <b>1MBT per night</b>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="f-12">2345km away</p>
                      <p className="f-12">available for 2weeks stay</p>
                    </div>
                    <div>
                      <img src={thumbnailcon.rate} alt="rating star" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="fantast" title="fantast city">
          <div className="row">
              {thumnailContent.map((thumbnailcon) => (
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <div className="border rounded-15 p-2">
                    <div className="p-2">
                      <img
                        src={thumbnailcon.thumnail}
                        className="size-img"
                        alt="thumbnail"
                      />
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="f-12">Desert king</p>
                      <p className="f-12">
                        <b>1MBT per night</b>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="f-12">2345km away</p>
                      <p className="f-12">available for 2weeks stay</p>
                    </div>
                    <div>
                      <img src={thumbnailcon.rate} alt="rating star" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="beach" title="beach">
          <div className="row">
              {thumnailContent.map((thumbnailcon) => (
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <div className="border rounded-15 p-2">
                    <div className="p-2">
                      <img
                        src={thumbnailcon.thumnail}
                        className="size-img"
                        alt="thumbnail"
                      />
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="f-12">Desert king</p>
                      <p className="f-12">
                        <b>1MBT per night</b>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="f-12">2345km away</p>
                      <p className="f-12">available for 2weeks stay</p>
                    </div>
                    <div>
                      <img src={thumbnailcon.rate} alt="rating star" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="carbins" title="Carbins">
          <div className="row">
              {thumnailContent.map((thumbnailcon) => (
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <div className="border rounded-15 p-2">
                    <div className="p-2">
                      <img
                        src={thumbnailcon.thumnail}
                        className="size-img"
                        alt="thumbnail"
                      />
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="f-12">Desert king</p>
                      <p className="f-12">
                        <b>1MBT per night</b>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="f-12">2345km away</p>
                      <p className="f-12">available for 2weeks stay</p>
                    </div>
                    <div>
                      <img src={thumbnailcon.rate} alt="rating star" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="farm" title="Farm">
          <div className="row">
              {thumnailContent.map((thumbnailcon) => (
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <div className="border rounded-15 p-2">
                    <div className="p-2">
                      <img
                        src={thumbnailcon.thumnail}
                        className="size-img"
                        alt="thumbnail"
                      />
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="f-12">Desert king</p>
                      <p className="f-12">
                        <b>1MBT per night</b>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="f-12">2345km away</p>
                      <p className="f-12">available for 2weeks stay</p>
                    </div>
                    <div>
                      <img src={thumbnailcon.rate} alt="rating star" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tab>
        </Tabs>
      </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Places;
