import PropTypes from "prop-types";
import clsx from "clsx"

const SectionTitle = ({
  titleText,
  subtitleText,
  subtitleColorClass,
  positionClass,
  spaceClass,
  borderClass
}) => {
  return (
    <div className={clsx("section-title", positionClass, spaceClass, borderClass)}>
      <h2>{titleText}</h2>
      <p className={clsx(subtitleColorClass)}>
        {subtitleText}
      </p>
    </div>
  );
};

SectionTitle.propTypes = {
  borderClass: PropTypes.string,
  positionClass: PropTypes.string,
  spaceClass: PropTypes.string,
  subtitleText: PropTypes.string,
  subtitleColorClass: PropTypes.string,
  titleText: PropTypes.string
};

export default SectionTitle;
