import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

import classes from "./header.module.scss";
import logo22 from "../../imgs/logo/logo22.webp";
import logo23 from "../../imgs/logo/logo23-min.webp";
import Paths from "../../routes/paths";

function AboutLink({ year }: { year: 22 | 23 }) {
  return (
    <motion.li whileHover={{ y: -2.5, fontWeight: 500 }} key={`${year}-about`}>
      <Link className={classes.Link} to={Paths[year].about}>
        about
      </Link>
    </motion.li>
  );
}

function CreditLink({ year }: { year: 22 | 23 }) {
  return (
    <motion.li whileHover={{ y: -2.5, fontWeight: 500 }} key={`${year}-credit`}>
      <Link to={Paths[year].credit} className={classes.Link}>
        credit
      </Link>
    </motion.li>
  );
}

function Logo22() {
  return (
    <Link to={Paths.default} key={`logo`}>
      <img src={logo22} alt="logo" draggable={false} width={50} />
    </Link>
  );
}

function Logo23() {
  return (
    <Link to={Paths.default} key={`logo`}>
      <img src={logo23} alt="logo" draggable={false} width={60} />
    </Link>
  );
}

function ProgramLink() {
  return (
    <motion.li whileHover={{ y: -2.5, fontWeight: 500 }} key={"program"}>
      <Link to={Paths[23].program}>program</Link>
    </motion.li>
  );
}

export { AboutLink, CreditLink, Logo22, Logo23, ProgramLink };
