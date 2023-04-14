import PropTypes from "prop-types";
import clsx from "clsx";

const FeatureIconEightSingle = ({ data, spaceBottomClass, textAlignClass }) => {
  return (
      <div className={clsx("support-wrap-7 support-shape", spaceBottomClass, textAlignClass)}>
        <div className="support-icon-7">
          <img src={process.env.PUBLIC_URL + data.image} alt="" />
        </div>
        <div className="support-content-7">
          <h5>{data.title}</h5>
        </div>
      </div>
  );
};

FeatureIconEightSingle.propTypes = {
  data: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string
};

export default FeatureIconEightSingle;
