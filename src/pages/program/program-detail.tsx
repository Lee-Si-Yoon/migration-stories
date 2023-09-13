import React from "react";
import { Link, useParams } from "react-router-dom";

function ProgramDetailPage() {
  const { programName = "" } = useParams();
  return (
    <div>
      <Link to="..">back</Link>program detail param: {programName}
    </div>
  );
}

ProgramDetailPage.displayName = "ProgramDetailPage";

export default ProgramDetailPage;
