import PropTypes from "prop-types";

const FeatureIconSingle = ({ singleFeature }) => {
  return (
    <div className="support-wrap mb-30">
      <div className="support-icon">
        <img
          className="animated"
          src={process.env.PUBLIC_URL + singleFeature.image}
          alt=""
        />
      </div>
      <div className="support-content">
        <h5>{singleFeature.title}</h5>
        <p>{singleFeature.subtitle}</p>
      </div>
    </div>
  );
};

FeatureIconSingle.propTypes = {
  singleFeature: PropTypes.shape({})
};

export default FeatureIconSingle;
