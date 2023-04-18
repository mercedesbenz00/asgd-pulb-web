import React from "react";
import { Link } from "react-router-dom";

export default function NavIcon({ icon:Icon, link }) {
  return (
    <Link to={link} style={{margin:"0 15px"}}>
      <Icon/>
    </Link>
  );
}
