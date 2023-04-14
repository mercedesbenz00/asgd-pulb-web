import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

const HeroSliderTwelveSingle = ({ data }) => {
  return (
    <div
      className={clsx("slider-height-4 d-flex align-items-center bg-img")}
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + data.image})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <div className="slider-content-5 slider-animated-1 text-center">
              <h3 className="animated">{data.title}</h3>
              <h1 className="animated">{data.subtitle}</h1>
              <p className="animated">{data.text}</p>
              <div className="slider-btn-5 btn-hover">
                <Link
                  className="animated"
                  to={process.env.PUBLIC_URL + data.url}
                >
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

HeroSliderTwelveSingle.propTypes = {
  data: PropTypes.shape({})
};

export default HeroSliderTwelveSingle;
