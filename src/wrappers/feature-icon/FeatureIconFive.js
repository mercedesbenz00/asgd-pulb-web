import PropTypes from "prop-types";
import clsx from "clsx";
import featureIconData from "../../data/feature-icons/feature-icon-five.json";
import FeatureIconFiveSingle from "../../components/feature-icon/FeatureIconFiveSingle.js";

const FeatureIconFive = ({ spaceBottomClass }) => {
  return (
    <div className={clsx("support-area", spaceBottomClass)}>
      <div className="container">
        <div className="support-wrap-4-border">
          <div className="row">
            {featureIconData.map((single, key) => (
              <div className="col-lg-4 col-md-4 col-sm-6" key={key}>
                <FeatureIconFiveSingle
                  data={single}
                  spaceBottomClass="mb-30"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

FeatureIconFive.propTypes = {
  spaceBottomClass: PropTypes.string
};

export default FeatureIconFive;
