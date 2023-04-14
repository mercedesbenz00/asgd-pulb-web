import PropTypes from "prop-types";
import React, { Fragment } from "react";
import HeaderOne from "../wrappers/header/HeaderOne";
import FooterTwo from "../wrappers/footer/FooterTwo";
import ScrollToTop from "../components/scroll-to-top"

const LayoutNine = ({
  children,
  headerContainerClass,
  headerTop,
  headerBorderStyle,
  headerPaddingClass
}) => {
  return (
    <Fragment>
      <HeaderOne
        layout={headerContainerClass}
        top={headerTop}
        borderStyle={headerBorderStyle}
        headerPaddingClass={headerPaddingClass}
      />
      {children}
      <FooterTwo
        footerTopSpaceTopClass="pt-80"
        spaceBottomClass="pb-25"
        footerLogo="/assets/img/logo/logo-2.png"
        backgroundImage="/assets/img/bg/footer-bg.jpg"
      />
      <ScrollToTop/>
    </Fragment>
  );
};

LayoutNine.propTypes = {
  children: PropTypes.node,
  headerBorderStyle: PropTypes.string,
  headerContainerClass: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerTop: PropTypes.string
};

export default LayoutNine;
