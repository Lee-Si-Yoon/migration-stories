import React from "react";
import { Link } from "react-router-dom";

import ProgramsJSON from "./programs-23.json";
import classes from "./programs.module.scss";
import Paths from "../../routes/paths";

export interface ProgramsJSONProps {
  programs: { [key: string]: string | number; id: number }[];
}

const { programs } = JSON.parse(
  JSON.stringify(ProgramsJSON)
) as ProgramsJSONProps;

function ProgramPage() {
  return (
    <div className={classes.Container}>
      {programs.map((p) => (
        <div key={p.id}>
          <Link to={`${Paths[23].program}/${p.id}`}>{p.name}</Link>
        </div>
      ))}
    </div>
  );
}

ProgramPage.displayName = "ProgramPage";

export default ProgramPage;
