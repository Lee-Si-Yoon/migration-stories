import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./header-items.module.scss";
import logo22 from "../../imgs/logo/logo22.webp";
import logo23 from "../../imgs/logo/logo23-min.webp";
import Paths from "../../routes/paths";

const activeStyle = ({ isActive }: { isActive: boolean }) => ({
  fontWeight: isActive ? 600 : 400,
  textShadow: isActive ? "0 0 0.25rem white" : "initial",
});

function AboutLink({ year }: { year: 22 | 23 }) {
  return (
    <li key={`${year}-about`} className={classes.Link}>
      <NavLink to={Paths[year].about} style={activeStyle}>
        about
      </NavLink>
    </li>
  );
}

function CreditLink({ year }: { year: 22 | 23 }) {
  return (
    <li key={`${year}-credit`} className={classes.Link}>
      <NavLink to={Paths[year].credit} style={activeStyle}>
        credit
      </NavLink>
    </li>
  );
}

function ProgramLink() {
  return (
    <li key={"program"} className={classes.Link}>
      <NavLink to={Paths[23].program} style={activeStyle}>
        program
      </NavLink>
    </li>
  );
}

function Logo22() {
  return (
    <NavLink to={Paths.default} key={`logo`}>
      <img src={logo22} alt="logo" draggable={false} width={50} />
    </NavLink>
  );
}

function Logo23() {
  return (
    <NavLink to={Paths.default} key={`logo`}>
      <img src={logo23} alt="logo" draggable={false} width={60} />
    </NavLink>
  );
}

export { AboutLink, CreditLink, Logo22, Logo23, ProgramLink };
