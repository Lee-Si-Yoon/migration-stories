import React from "react";
import { Link, useParams } from "react-router-dom";

import type { ProgramsJSONProps } from "./program";
import ProgramsJSON from "./programs-23.json";
import classes from "./programs-detail.module.scss";

const { programs } = JSON.parse(
  JSON.stringify(ProgramsJSON)
) as ProgramsJSONProps;

function ProgramDetailPage() {
  const { programName = "" } = useParams();

  const data = programs.find((p) => String(p.id) === programName);

  if (!data) return null;

  return (
    <div className={classes.Container}>
      <Link to="..">back</Link>
      {Object.entries(data).map(([key, value]) => {
        if (key === "id") return null;
        return (
          <p key={`${key}`}>{`${
            key.includes("name") ? "" : key + ":"
          } ${value}`}</p>
        );
      })}
    </div>
  );
}

ProgramDetailPage.displayName = "ProgramDetailPage";

export default ProgramDetailPage;
