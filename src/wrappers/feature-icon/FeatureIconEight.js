import PropTypes from "prop-types";
import clsx from "clsx";
import featureIconData from "../../data/feature-icons/feature-icon-eight.json";
import FeatureIconEightSingle from "../../components/feature-icon/FeatureIconEightSingle.js";

const FeatureIconEight = ({ spaceBottomClass }) => {
  return (
    <div className={clsx("support-area-7", spaceBottomClass)}>
      <div className="container">
        <div className="row">
          {featureIconData?.map((single, key) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={key}>
              <FeatureIconEightSingle
                data={single}
                spaceBottomClass="mb-30"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

FeatureIconEight.propTypes = {
  spaceBottomClass: PropTypes.string
};

export default FeatureIconEight;
