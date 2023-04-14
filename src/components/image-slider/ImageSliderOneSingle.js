import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ImageSliderOneSingle = ({ data }) => {
  return (
    <div className="single-image">
      <Link to={process.env.PUBLIC_URL + data.link}>
        <img src={process.env.PUBLIC_URL + data.image} alt="" />
      </Link>
    </div>
  );
};

ImageSliderOneSingle.propTypes = {
  data: PropTypes.shape({})
};

export default ImageSliderOneSingle;
