import PropTypes from "prop-types";
import clsx from "clsx"

const SectionTitleSeven = ({
  titleText,
  subtitleText,
  positionClass,
  spaceClass,
  borderClass
}) => {
  return (
    <div className={clsx("section-title-8", positionClass, spaceClass, borderClass)}>
      <h2>{titleText}</h2>
      <p>{subtitleText}</p>
    </div>
  );
};

SectionTitleSeven.propTypes = {
  borderClass: PropTypes.string,
  positionClass: PropTypes.string,
  spaceClass: PropTypes.string,
  subtitleText: PropTypes.string,
  titleText: PropTypes.string
};

export default SectionTitleSeven;
