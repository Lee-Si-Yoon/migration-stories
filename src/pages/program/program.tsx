import React from "react";
import { Link } from "react-router-dom";

import Paths from "../../routes/paths";

function ProgramPage() {
  return (
    <div>
      <Link to={`${Paths[23].program}/program`}>to program detail</Link>
    </div>
  );
}

ProgramPage.displayName = "ProgramPage";

export default ProgramPage;
