import React from "react";
import { isMobile } from "react-device-detect";
import VimeoPlayer from "react-player/vimeo";
import { useMatch } from "react-router-dom";
import { useOverlayTriggerState } from "react-stately";

import video22 from "./video-22.json";
import video23 from "./video-23.json";
import HeadphoneRequestDialog from "../../components/modal/headphone-request-dialog/headphone-request-dialog";
import Modal from "../../components/modal/modal";
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

  const state = useOverlayTriggerState({});

  React.useEffect(() => {
    state.open();
  }, []);

  return (
    <>
      {!state.isOpen && (
        <VimeoPlayer
          volume={1}
          playing
          width={"100%"}
          height={"100%"}
          url={filteredData?.src}
          title={filteredData?.name}
          controls={isMobile}
          fallback={<p>Loading...</p>}
          stopOnUnmount
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: -1,
          }}
        />
      )}
      <Modal state={state}>
        <HeadphoneRequestDialog
          onSubmit={() => {
            state.close();
          }}
        />
      </Modal>
    </>
  );
}

VideoPage.displayName = "VideoPage";

export default VideoPage;
