import React from "react";
import { Link } from "react-router-dom";

import Paths from "../../routes/paths";

function Wander22Page() {
  return (
    <div>
      <Link to={`${Paths[22].story}/name`}>to story</Link>
    </div>
  );
}

Wander22Page.displayName = "Wander22Page";

export default Wander22Page;
