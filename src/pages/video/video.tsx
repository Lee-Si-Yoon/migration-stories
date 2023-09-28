import React from "react";
import { useMatch } from "react-router-dom";

import video22 from "./video-22.json";
import video23 from "./video-23.json";
import Paths from "../../routes/paths";

const { data: data22 } = video22;
const { data: data23 } = video23;

function VideoPage() {
  const param22Name = useMatch(`${Paths[22].video}/:name`)?.params.name;
  const param23Name = useMatch(`${Paths[23].video}/:name`)?.params.name;

  const filteredData = (({ is22, is23 }: { is22?: string; is23?: string }) => {
    if (is22) return data22.find((datum) => datum.name === is22);
    if (is23) return data23.find((datum) => datum.name === is23);
  })({ is22: param22Name, is23: param23Name });

  return <div>videoPage param: {filteredData?.name}</div>;
}

VideoPage.displayName = "VideoPage";

export default VideoPage;
