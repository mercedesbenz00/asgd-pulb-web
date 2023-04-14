import PropTypes from "prop-types";
import clsx from "clsx";

const FeatureIconSevenSingle = ({ data, spaceBottomClass, textAlignClass }) => {
  return (
      <div className={clsx("support-wrap-6 support-shape", spaceBottomClass, textAlignClass)}>
        <div className="support-content-6">
          <img src={process.env.PUBLIC_URL + data.image} alt="" />
          <h5>{data.title}</h5>
          <p>{data.subtitle}</p>
        </div>
      </div>
  );
};

FeatureIconSevenSingle.propTypes = {
  data: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string,
  textAlignClass: PropTypes.string
};

export default FeatureIconSevenSingle;
