import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const HeroSliderThreeSingle = ({ data }) => {
  return (
    <div className="slider-height-7 bg-glaucous d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center slider-h9-mrg">
          <div className="col-lg-6 col-md-6 col-12 col-sm-6">
            <div className="slider-content-7 slider-animated-1">
              <h3 className="animated">{data.title}</h3>
              <h1
                className="animated"
                dangerouslySetInnerHTML={{ __html: data.subtitle }}
              />
              <div className="slider-btn-9 btn-hover">
                <Link
                  className="animated"
                  to={process.env.PUBLIC_URL + data.url}
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 col-sm-6">
            <div className="slider-singleimg-hm9 slider-animated-1">
              <img
                className="animated"
                src={process.env.PUBLIC_URL + data.image}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderThreeSingle.propTypes = {
  data: PropTypes.shape({})
};

export default HeroSliderThreeSingle;
