import classes from "./SidebarOption.module.css";
import React from "react";
import { Link } from "react-router-dom";

function SidebarOption({ Icon, title, number, selected }) {
  return (
    <Link
      to={`/${number && title.toLowerCase()}`}
      style={{ textDecoration: "none" }}
    >
      <div
        className={`${classes.sidebarOption} ${
          selected && classes.sidebarOption_active
        }`}
      >
        <Icon style={{ padding: "10px" }} />
        <h3>{title}</h3>
        <p>{number}</p>
      </div>
    </Link>
  );
}

export default SidebarOption;
