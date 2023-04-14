import PropTypes from "prop-types";
import React, { Fragment } from "react";
import HeaderThree from "../wrappers/header/HeaderThree";
import FooterThree from "../wrappers/footer/FooterThree";
import ScrollToTop from "../components/scroll-to-top"

const LayoutFour = ({ children }) => {
  return (
    <Fragment>
      <HeaderThree />
      {children}
      <FooterThree spaceBottomClass="pb-70" />
      <ScrollToTop/>
    </Fragment>
  );
};

LayoutFour.propTypes = {
  children: PropTypes.node,
  footerBgClass: PropTypes.string
};

export default LayoutFour;
