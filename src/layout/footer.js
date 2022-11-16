
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import logoFooter from "../images/logo-white.svg";



function Footer() {

  return (
    <div className="App">
      <div className="footer bg-black py-5">
        <Container>
          <div className="row py-5">
            <div className="col-12 col-md-6 col-lg-3">
              <img src={logoFooter} alt="logo" />
              <div className="my-5 d-flex gap-5">
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.5 6.1875H6.125V3.9375C6.125 3.63913 6.24353 3.35298 6.4545 3.142C6.66548 2.93103 6.95163 2.8125 7.25 2.8125H8.375V0H6.125C5.22989 0 4.37145 0.355579 3.73851 0.988515C3.10558 1.62145 2.75 2.47989 2.75 3.375V6.1875H0.5V9H2.75V18H6.125V9H8.375L9.5 6.1875Z"
                    fill="#F7F7F7"
                  />
                </svg>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_15652_595)">
                    <path
                      d="M12.375 0H5.625C4.13316 0 2.70242 0.592632 1.64752 1.64752C0.592632 2.70242 0 4.13316 0 5.625L0 12.375C0 13.8668 0.592632 15.2976 1.64752 16.3525C2.70242 17.4074 4.13316 18 5.625 18H12.375C13.8668 18 15.2976 17.4074 16.3525 16.3525C17.4074 15.2976 18 13.8668 18 12.375V5.625C18 4.13316 17.4074 2.70242 16.3525 1.64752C15.2976 0.592632 13.8668 0 12.375 0V0ZM16.3125 12.375C16.3125 14.5463 14.5463 16.3125 12.375 16.3125H5.625C3.45375 16.3125 1.6875 14.5463 1.6875 12.375V5.625C1.6875 3.45375 3.45375 1.6875 5.625 1.6875H12.375C14.5463 1.6875 16.3125 3.45375 16.3125 5.625V12.375Z"
                      fill="#F7F7F7"
                    />
                    <path
                      d="M9 4.5C7.80653 4.5 6.66193 4.97411 5.81802 5.81802C4.97411 6.66193 4.5 7.80653 4.5 9C4.5 10.1935 4.97411 11.3381 5.81802 12.182C6.66193 13.0259 7.80653 13.5 9 13.5C10.1935 13.5 11.3381 13.0259 12.182 12.182C13.0259 11.3381 13.5 10.1935 13.5 9C13.5 7.80653 13.0259 6.66193 12.182 5.81802C11.3381 4.97411 10.1935 4.5 9 4.5ZM9 11.8125C8.25435 11.8116 7.5395 11.515 7.01225 10.9878C6.485 10.4605 6.18839 9.74565 6.1875 9C6.1875 7.44863 7.44975 6.1875 9 6.1875C10.5503 6.1875 11.8125 7.44863 11.8125 9C11.8125 10.5503 10.5503 11.8125 9 11.8125Z"
                      fill="#F7F7F7"
                    />
                    <path
                      d="M13.8374 4.76212C14.1686 4.76212 14.437 4.49366 14.437 4.16249C14.437 3.83133 14.1686 3.56287 13.8374 3.56287C13.5063 3.56287 13.2378 3.83133 13.2378 4.16249C13.2378 4.49366 13.5063 4.76212 13.8374 4.76212Z"
                      fill="#F7F7F7"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_15652_595">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <svg
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 1.98135C17.3229 2.27666 16.6068 2.47293 15.8737 2.5641C16.6463 2.1058 17.2238 1.38011 17.4971 0.524473C16.7738 0.953476 15.9824 1.25558 15.1571 1.41772C14.6511 0.877474 13.9944 0.501881 13.2722 0.339742C12.55 0.177602 11.7957 0.236409 11.1073 0.508525C10.419 0.78064 9.82836 1.25348 9.41223 1.86563C8.9961 2.47777 8.77368 3.20091 8.77387 3.9411C8.77387 4.2336 8.79862 4.51485 8.85938 4.7826C7.39134 4.71062 5.95503 4.32961 4.64434 3.66448C3.33365 2.99935 2.17811 2.06507 1.25325 0.922723C0.779422 1.73481 0.632935 2.69697 0.843619 3.61328C1.0543 4.52958 1.60631 5.33114 2.38725 5.85472C1.8031 5.83906 1.23128 5.68318 0.72 5.40022V5.44072C0.720979 6.29283 1.0155 7.11859 1.55398 7.77899C2.09247 8.43939 2.84203 8.89411 3.6765 9.0666C3.36081 9.1498 3.03546 9.19065 2.709 9.1881C2.47454 9.19227 2.24031 9.17114 2.01038 9.1251C2.24881 9.8575 2.70843 10.498 3.32594 10.9583C3.94346 11.4187 4.68851 11.6763 5.4585 11.6957C4.15231 12.7173 2.54135 13.2714 0.883125 13.2696C0.5805 13.2696 0.29025 13.2561 0 13.219C1.68737 14.3063 3.65364 14.8815 5.661 14.875C12.4515 14.875 16.164 9.24997 16.164 4.37422C16.164 4.2111 16.1584 4.0536 16.1505 3.89722C16.8783 3.37633 17.5051 2.72709 18 1.98135Z"
                    fill="#F7F7F7"
                  />
                </svg>
              </div>
              <p className="text-white"> &copy; {new Date().getFullYear()} Metabnb</p>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <h4 className="text-white mb-3 fw-bold">Community</h4>
              <ul className="list-unstyled d-flex gap-4 flex-column">
                <li><Link to="/" className="text-white text-decoration-none">NFT</Link></li>
                <li><Link to="/" className="text-white text-decoration-none">Tokens</Link></li>
                <li><Link to="/" className="text-white text-decoration-none">Landlords</Link></li>
                <li><Link to="/" className="text-white text-decoration-none">Discord</Link></li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <h4 className="text-white mb-3 fw-bold">Places</h4>
              <ul className="list-unstyled d-flex gap-4 flex-column">
                <li><Link to="/" className="text-white text-decoration-none">Castle</Link></li>
                <li><Link to="/" className="text-white text-decoration-none">Farms </Link></li>
                <li><Link to="/" className="text-white text-decoration-none">Beach</Link></li>
                <li><Link to="/" className="text-white text-decoration-none">Learn more</Link></li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <h4 className="text-white mb-3 fw-bold" >About us</h4>
              <ul className="list-unstyled d-flex gap-4 flex-column">
                <li><Link to="/" className="text-white text-decoration-none">Road map </Link></li>
                <li><Link to="/" className="text-white text-decoration-none">Creators  </Link></li>
                <li><Link to="/" className="text-white text-decoration-none">Career </Link></li>
                <li><Link to="/" className="text-white text-decoration-none">Contact us </Link></li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
