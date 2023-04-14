import PropTypes from "prop-types";
import clsx from "clsx"

const SectionTitleThree = ({
  titleText,
  positionClass,
  spaceClass,
  colorClass
}) => {
  return (
    <div className={clsx("section-title-5", positionClass, spaceClass)}>
      <h2 className={clsx(colorClass)}>{titleText}</h2>
    </div>
  );
};

SectionTitleThree.propTypes = {
  positionClass: PropTypes.string,
  spaceClass: PropTypes.string,
  titleText: PropTypes.string
};

export default SectionTitleThree;
