import PropTypes from "prop-types";
import { useRef, useEffect } from "react";
import clsx from "clsx";
import NavMenu from "./NavMenu";

const OffcanvasMenu = ({ activeState, getActiveState }) => {
  const boxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        getActiveState(false);
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [getActiveState]);
  return (
    <div ref={boxRef} className={clsx("clickable-mainmenu", activeState ? "inside" : "")}>
      {/* nav menu*/}
      <NavMenu sidebarMenu={true} />

      {/* header social */}
      {/* <HeaderSocial /> */}
    </div>
  );
};

OffcanvasMenu.propTypes = {
  activeState: PropTypes.bool,
  getActiveState: PropTypes.func
};

export default OffcanvasMenu;
