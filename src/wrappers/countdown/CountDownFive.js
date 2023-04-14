import PropTypes from "prop-types";
import clsx from "clsx"
import { Link } from "react-router-dom";
import CountdownTimer from "../../components/countdown";

const CountDownFive = ({
  spaceTopClass,
  spaceBottomClass,
  bgImg,
  image,
  dateTime
}) => {
  return (
    <div
      className={clsx("funfact-area", spaceTopClass, spaceBottomClass)}
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + bgImg})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-md-5">
            <div className="funfact-content funfact-content--style2 text-center">
              <h2>Deal of the day</h2>
              <div className="timer">
                <CountdownTimer date={dateTime} />
              </div>
              <div className="funfact-btn funfact-btn-brown btn-hover">
                <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="funfact-image text-center text-lg-end">
              <img
                src={process.env.PUBLIC_URL + image}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CountDownFive.propTypes = {
  bgImg: PropTypes.string,
  image: PropTypes.string,
  dateTime: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default CountDownFive;
