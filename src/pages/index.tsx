import React from "react";
import { Link } from "react-router-dom";

import Paths from "../routes/paths";

function IndexPage() {
  return (
    <div>
      index
      <Link to={Paths[22].wander}>to 22</Link>
      <Link to={Paths[23].wander}>to 23</Link>
    </div>
  );
}

IndexPage.displayName = "IndexPage";

export default IndexPage;
