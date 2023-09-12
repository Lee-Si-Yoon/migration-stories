import React from "react";
import { Link, useParams } from "react-router-dom";

import Paths from "../../routes/paths";

function StoryPage() {
  const { name } = useParams();
  return (
    <div>
      <Link to={`${Paths[22].video}/name`}>to video</Link>
      param: {name}
    </div>
  );
}

StoryPage.displayName = "StoryPage";

export default StoryPage;
