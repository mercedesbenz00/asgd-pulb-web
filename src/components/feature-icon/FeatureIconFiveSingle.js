import PropTypes from "prop-types";
import clsx from "clsx";

const FeatureIconFiveSingle = ({ data, spaceBottomClass }) => {
  return (
      <div className={clsx("support-wrap-4", spaceBottomClass)}>
        <div className="support-icon-4">
          <img
            className="animated"
            src={process.env.PUBLIC_URL + data.image}
            alt=""
          />
        </div>
        <div className="support-content-4">
          <h5>{data.title}</h5>
          <p>{data.subtitle}</p>
        </div>
      </div>
  );
};

FeatureIconFiveSingle.propTypes = {
  data: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string
};

export default FeatureIconFiveSingle;
