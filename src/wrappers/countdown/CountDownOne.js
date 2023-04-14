import PropTypes from "prop-types";
import clsx from "clsx"
import { Link } from "react-router-dom";
import CountdownTimer from "../../components/countdown";

const CountDownOne = ({ spaceTopClass, spaceBottomClass, bgImg, dateTime }) => {
  return (
    <div
      className={clsx("funfact-area", spaceTopClass, spaceBottomClass)}
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + bgImg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ms-auto">
            <div className="funfact-content text-center">
              <h2>Deal of the day</h2>
              <div className="timer">
                <CountdownTimer date={dateTime} />
              </div>
              <div className="funfact-btn btn-hover">
                <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CountDownOne.propTypes = {
  bgImg: PropTypes.string,
  dateTime: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default CountDownOne;
