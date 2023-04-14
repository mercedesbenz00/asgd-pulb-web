import PropTypes from "prop-types";
import clsx from "clsx";
import featureIconData from "../../data/feature-icons/feature-icon-three.json";
import FeatureIconThreeSingle from "../../components/feature-icon/FeatureIconThreeSingle.js";

const FeatureIconThree = ({
  bgColorClass,
  spaceBottomClass,
  featureShapeClass
}) => {
  return (
    <div
      className={clsx("support-area", bgColorClass, spaceBottomClass)}
    >
      <div className="container">
        <div className="row">
          {featureIconData?.map((single, key) => (
            <div className="col-lg-4 col-md-4 col-sm-6" key={key}>
              <FeatureIconThreeSingle
                data={single}
                spaceBottomClass="mb-30"
                featureShapeClass={featureShapeClass}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

FeatureIconThree.propTypes = {
  bgColorClass: PropTypes.string,
  featureShapeClass: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default FeatureIconThree;
