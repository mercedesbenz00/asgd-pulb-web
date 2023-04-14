import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CategoryOneSingle = ({ data }) => {
  return (
    <div className="collection-product-2">
      <Link to={process.env.PUBLIC_URL + data.link}>
        <img src={process.env.PUBLIC_URL + data.image} alt="" />
      </Link>
      <div className="collection-content-2 text-center">
        <span>{data.subtitle}</span>
        <h4>
          <Link to={process.env.PUBLIC_URL + data.link}>{data.title}</Link>
        </h4>
      </div>
    </div>
  );
};

CategoryOneSingle.propTypes = {
  data: PropTypes.shape({})
};

export default CategoryOneSingle;
