import React from "react";
import { NavLink } from "react-router-dom";

const BackButton = ({ path, btnClasses = "btn btn-sm btn-primary" }) => {
  return (
    <NavLink className={btnClasses} to={path}>
      Back
    </NavLink>
  );
};

export default BackButton;
