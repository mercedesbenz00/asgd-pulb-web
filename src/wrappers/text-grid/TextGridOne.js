import PropTypes from "prop-types";
import clsx from "clsx";
import textGridData from "../../data/text-grid/text-grid-one.json";
import TextGridOneSingle from "../../components/text-grid/TextGridOneSingle.js";

const TextGridOne = ({ spaceBottomClass }) => {
  return (
    <div className={clsx("about-mission-area", spaceBottomClass)}>
      <div className="container">
        <div className="row">
          {textGridData?.map((single, key) => (
              <div className="col-lg-4 col-md-4" key={key}>
                <TextGridOneSingle
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

TextGridOne.propTypes = {
  spaceBottomClass: PropTypes.string
};

export default TextGridOne;
