import PropTypes from "prop-types";
import clsx from "clsx";
import featureIconData from "../../data/feature-icons/feature-icon-nine.json";
import FeatureIconNineSingle from "../../components/feature-icon/FeatureIconNineSingle.js";

const FeatureIconNine = ({
  spaceTopClass,
  spaceBottomClass,
  containerClass,
  gutterClass,
  responsiveClass,
  bgImg,
  bgColorClass
}) => {
  return (
    <div
      className={clsx("support-area hm9-section-padding", bgColorClass, spaceTopClass, spaceBottomClass, responsiveClass)}
      style={
        bgImg
          ? { backgroundImage: `url(${process.env.PUBLIC_URL + bgImg})` }
          : {}
      }
    >
      <div className={clsx(containerClass, gutterClass)}>
        <div className="row">
          {featureIconData?.map((single, key) => (
            <div className="col-lg-4 col-md-6 col-sm-6" key={key}>
              <FeatureIconNineSingle
                data={single}
                spaceBottomClass="mb-10"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

FeatureIconNine.propTypes = {
  bgImg: PropTypes.string,
  containerClass: PropTypes.string,
  gutterClass: PropTypes.string,
  responsiveClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  bgColorClass: PropTypes.string
};

export default FeatureIconNine;
