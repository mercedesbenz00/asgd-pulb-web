import PropTypes from "prop-types";
import clsx from "clsx";

const FeatureIconSixSingle = ({ data, spaceBottomClass, textAlignClass }) => {
  return (
      <div className={clsx("support-wrap-5 support-shape", spaceBottomClass, textAlignClass)}>
        <div className="support-content-5">
          <h5>{data.title}</h5>
          <p>{data.subtitle}</p>
        </div>
      </div>
  );
};

FeatureIconSixSingle.propTypes = {
  data: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string,
  textAlignClass: PropTypes.string
};

export default FeatureIconSixSingle;
