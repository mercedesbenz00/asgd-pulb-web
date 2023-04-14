import PropTypes from "prop-types";
import clsx from "clsx";

const FeatureIconNineSingle = ({ data, spaceBottomClass }) => {
  return (
      <div
        className={clsx("support-wrap-3 text-center", spaceBottomClass)}
        style={{ backgroundColor: `${data.backgroundColor}` }}
      >
        <div className="support-icon-2">
          <img
            className="animated"
            src={process.env.PUBLIC_URL + data.iconImage}
            alt=""
          />
        </div>
        <div className="support-content-3 support-content-3-white">
          <img src={process.env.PUBLIC_URL + data.titleImage} alt="" />
          <p>{data.title}</p>
        </div>
      </div>
  );
};

FeatureIconNineSingle.propTypes = {
  data: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string
};

export default FeatureIconNineSingle;
