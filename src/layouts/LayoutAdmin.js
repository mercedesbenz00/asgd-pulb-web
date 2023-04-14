import PropTypes from "prop-types";
import React, { Fragment } from "react";
import HeaderSix from "../wrappers/header/HeaderSix";
import ScrollToTop from "../components/scroll-to-top"

const LayoutAdmin = ({ children }) => {
  return (
    <Fragment>
      <HeaderSix layout="container-fluid" />
      {children}
      <ScrollToTop/>
    </Fragment>
  );
};

export default LayoutAdmin;

LayoutAdmin.propTypes = {
  children: PropTypes.node
};
