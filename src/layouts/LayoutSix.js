import PropTypes from "prop-types";
import React, { Fragment } from "react";
import HeaderFive from "../wrappers/header/HeaderFive";
import FooterOne from "../wrappers/footer/FooterOne";
import ScrollToTop from "../components/scroll-to-top"

const LayoutSix = ({ children }) => {
  return (
    <Fragment>
      <HeaderFive />
      <div className="home-sidebar-right">
        {children}
        <FooterOne
          backgroundColorClass="bg-gray"
          spaceTopClass="pt-100"
          spaceBottomClass="pb-70"
          containerClass="container-fluid"
          extraFooterClass="hm4-footer-padding"
          sideMenu={true}
        />
      </div>
      <ScrollToTop/>
    </Fragment>
  );
};

LayoutSix.propTypes = {
  children: PropTypes.node
};

export default LayoutSix;
