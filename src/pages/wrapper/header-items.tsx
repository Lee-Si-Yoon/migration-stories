import React from "react";
import { Link } from "react-router-dom";

import Paths from "../../routes/paths";

function AboutLink({ year }: { year: 22 | 23 }) {
  return (
    <Link to={Paths[year].about} key={`${year}-about`}>
      about
    </Link>
  );
}

function CreditLink({ year }: { year: 22 | 23 }) {
  return (
    <Link to={Paths[year].credit} key={`${year}-credit`}>
      credit
    </Link>
  );
}

function Logo() {
  return (
    <Link to={Paths.default} key={`logo`}>
      logo
    </Link>
  );
}

function ProgramLink() {
  return (
    <Link to={Paths[23].program.default} key={"program"}>
      program
    </Link>
  );
}

export { AboutLink, CreditLink, Logo, ProgramLink };
