import React from "react";
import { useParams } from "react-router-dom";

function VideoPage() {
  const { name } = useParams();
  return <div>videoPage param: {name}</div>;
}

VideoPage.displayName = "VideoPage";

export default VideoPage;
