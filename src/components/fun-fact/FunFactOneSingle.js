import PropTypes from "prop-types";
import { useState } from "react";
import clsx from "clsx";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FunFactOneSingle = ({ data, spaceBottomClass, textAlignClass }) => {
  const [didViewCountUp, setDidViewCountUp] = useState(false);

  const onVisibilityChange = isVisible => {
    if (isVisible) {
      setDidViewCountUp(true);
    }
  };
  return (
      <div className={clsx("single-count", textAlignClass, spaceBottomClass)}>
        <div className="count-icon">
          <i className={data.iconClass} />
        </div>
        <h2 className="count">
          <VisibilitySensor
            onChange={onVisibilityChange}
            offset={{ top: 10 }}
            delayedCall
          >
            <CountUp end={didViewCountUp ? data.countNum : 0} />
          </VisibilitySensor>
        </h2>
        <span>{data.title}</span>
      </div>
  );
};

FunFactOneSingle.propTypes = {
  data: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string,
  textAlignClass: PropTypes.string
};

export default FunFactOneSingle;
