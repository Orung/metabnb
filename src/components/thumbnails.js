import Container from "react-bootstrap/Container";
import "../App.css";
import thumnail1 from "../images/grid-1.png";
import thumnail2 from "../images/grid2.png";
import thumnail3 from "../images/grid3.png";
import thumnail4 from "../images/grid4.png";
import thumnail5 from "../images/grid5.png";
import thumnail6 from "../images/grid6.png";
import thumnail7 from "../images/grid6.png";
import thumnail8 from "../images/grid6.png";
import rate from "../images/likes.png";

function thumbnails() {
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
      thumnail:thumnail4,
      rate: rate,
    },
    {
        thumnail:thumnail5,
        rate: rate,
    },
    {
        thumnail:thumnail6,
        rate: rate,
    },
    {
        thumnail:thumnail7,
        rate: rate,
    },
    {
        thumnail:thumnail8,
        rate: rate,
    },
  ];
  return (
      <Container>
        <h4 className="grid-title my-5 text-center">Inspiration for your next adventure</h4>
        <div className="row">
        {thumnailContent.map((thumbnailcon) => ( 
        <div className="col-12 col-md-6 col-lg-3 mb-3">
            
              <div className="border rounded p-2">
                <div className="p-2">
                <img src={thumbnailcon.thumnail} className="size-img" alt="thumbnail" />
                </div>
                <div className="d-flex justify-content-between">
                  <p>Desert king</p>
                  <p>
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
      </Container>
  );
}

export default thumbnails;
