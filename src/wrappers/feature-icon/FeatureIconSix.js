import PropTypes from "prop-types";
import clsx from "clsx";
import featureIconData from "../../data/feature-icons/feature-icon-six.json";
import FeatureIconSixSingle from "../../components/feature-icon/FeatureIconSixSingle.js";

const FeatureIconSix = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("support-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="border-bottom">
          <div className="row feature-icon-two-wrap">
            {featureIconData?.map((single, key) => (
              <div className="col-md-4" key={key}>
                <FeatureIconSixSingle
                  data={single}
                  spaceBottomClass="mb-30"
                  textAlignClass="text-center"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

FeatureIconSix.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default FeatureIconSix;
