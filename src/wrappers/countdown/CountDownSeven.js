import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import CountdownTimer from "../../components/countdown";

const CountDownSeven = ({ bgColorClass, spaceTopClass, dateTime }) => {
  return (
    <div className={clsx("black-friday-deal-area", bgColorClass, spaceTopClass)}>
      <div className="container">
        <div className="black-friday-deal-content text-center">
          <h2>Black Friday Offer!</h2>
          <div className="dealy-style-2">
            <CountdownTimer date={dateTime} />
          </div>
          <div className="slider-btn-12 btn-hover">
            <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
              MORE OFFER
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

CountDownSeven.propTypes = {
  bgColorClass: PropTypes.string,
  dateTime: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default CountDownSeven;
