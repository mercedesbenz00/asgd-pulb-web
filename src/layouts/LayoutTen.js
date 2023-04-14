import PropTypes from "prop-types";
import React, { Fragment } from "react";
import HeaderSix from "../wrappers/header/HeaderSix";
import FooterFour from "../wrappers/footer/FooterFour";
import ScrollToTop from "../components/scroll-to-top"

const LayoutTen = ({ children }) => {
  return (
    <Fragment>
      <HeaderSix layout="container-fluid" />
      {children}
      <FooterFour
        spaceTopClass="pt-100"
        spaceBottomClass="pb-70"
        backgroundColorClass="bg-black-3"
      />
      <ScrollToTop/>
    </Fragment>
  );
};

export default LayoutTen;

LayoutTen.propTypes = {
  children: PropTypes.node
};
