import PropTypes from "prop-types";
import clsx from "clsx"

const SectionTitleSix = ({ sectionTitle, spaceBottomClass, positionClass }) => {
  return (
    <div className={clsx("section-title-6", spaceBottomClass)}>
      <h2 className={clsx(positionClass)}>{sectionTitle}</h2>
    </div>
  );
};

SectionTitleSix.propTypes = {
  positionClass: PropTypes.string,
  sectionTitle: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default SectionTitleSix;
