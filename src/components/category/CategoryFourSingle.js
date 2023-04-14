import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CategoryFourSingle = ({ data, sliderClass }) => {
  return (
    <div className="collection-product">
      <div className="collection-img">
        <Link to={process.env.PUBLIC_URL + data.link}>
          <img src={process.env.PUBLIC_URL + data.image} alt="" />
        </Link>
      </div>
      <div className="collection-content text-center">
        <span>{data.subtitle}</span>
        <h4>
          <Link to={process.env.PUBLIC_URL + data.link}>{data.title}</Link>
        </h4>
        <Link
          to={process.env.PUBLIC_URL + data.link}
          className="collection-btn"
        >
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};

CategoryFourSingle.propTypes = {
  data: PropTypes.shape({}),
  sliderClass: PropTypes.string
};

export default CategoryFourSingle;
