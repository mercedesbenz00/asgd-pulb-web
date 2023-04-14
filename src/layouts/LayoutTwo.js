import PropTypes from "prop-types";
import React, { Fragment } from "react";
import HeaderTwo from "../wrappers/header/HeaderTwo";
import FooterOne from "../wrappers/footer/FooterOne";
import ScrollToTop from "../components/scroll-to-top"

const LayoutTwo = ({ children, footerBgClass }) => {
  return (
    <Fragment>
      <HeaderTwo />
      {children}
      <FooterOne
        backgroundColorClass={footerBgClass ? footerBgClass : "bg-gray"}
        spaceTopClass="pt-100"
        spaceBottomClass="pb-70"
      />
      <ScrollToTop/>
    </Fragment>
  );
};

LayoutTwo.propTypes = {
  children: PropTypes.node,
  footerBgClass: PropTypes.string
};

export default LayoutTwo;
