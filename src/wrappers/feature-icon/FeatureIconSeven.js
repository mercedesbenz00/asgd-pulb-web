import PropTypes from "prop-types";
import clsx from "clsx";
import featureIconData from "../../data/feature-icons/feature-icon-seven.json";
import FeatureIconSevenSingle from "../../components/feature-icon/FeatureIconSevenSingle.js";

const FeatureIconSeven = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("support-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="row feature-icon-two-wrap">
          {featureIconData?.map((single, key) => (
            <div className="col-md-4" key={key}>
              <FeatureIconSevenSingle
                data={single}
                spaceBottomClass="mb-30"
                textAlignClass="text-center"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

FeatureIconSeven.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default FeatureIconSeven;
