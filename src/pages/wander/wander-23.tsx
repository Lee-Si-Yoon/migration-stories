import React from "react";
import { Link } from "react-router-dom";

import Paths from "../../routes/paths";

function Wander23Page() {
  return (
    <div>
      <Link to={`${Paths[22].video}/name`}>to video</Link>
    </div>
  );
}

Wander23Page.displayName = "Wander23Page";

export default Wander23Page;
