import React from "react";
import { NavLink } from "react-router-dom";

const LinkButton = ({
  path,
  btnClasses = "btn btn-sm btn-primary",
  text = "Back",
  iconClass = "",
}) => {
  return (
    <NavLink className={btnClasses} to={path}>
      {iconClass !== "" ? <i className={iconClass}>{text}</i> : text}
    </NavLink>
  );
};

export default LinkButton;
