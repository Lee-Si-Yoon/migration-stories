import React from "react";
import { useDialog, type AriaDialogProps } from "react-aria";
import { isMobile } from "react-device-detect";
import VimeoPlayer from "react-player/vimeo";
import { useMatch } from "react-router-dom";
import { useOverlayTriggerState } from "react-stately";

import video22 from "./video-22.json";
import video23 from "./video-23.json";
import classes from "./video.module.scss";
import Button from "../../components/buttons/button";
import Modal from "../../components/modal/modal";
import Paths from "../../routes/paths";

const { data: data22 } = video22;
const { data: data23 } = video23;

function VideoPage(props: AriaDialogProps) {
  const param22Name = useMatch(`${Paths[22].video}/:name`)?.params.name;
  const param23Name = useMatch(`${Paths[23].video}/:name`)?.params.name;

  const filteredData = (({ is22, is23 }: { is22?: string; is23?: string }) => {
    if (is22) return data22.find((datum) => datum.name === is22);
    if (is23) return data23.find((datum) => datum.name === is23);
  })({ is22: param22Name, is23: param23Name });

  const state = useOverlayTriggerState({});

  const ref = React.useRef<HTMLDivElement>(null);
  const { titleProps } = useDialog(
    {
      ...props,
      role: "alertdialog",
    },
    ref,
  );

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
          }}
        />
      )}
      <Modal state={state}>
        <div className={classes.Dialog}>
          <div className={[classes.Content].join(" ")} {...titleProps}>
            <h1>이야기를 재생하시겠습니까?</h1>
            {param22Name === undefined && (
              <span>Вы хотите посмотреть историю?</span>
            )}
            <h4>(헤드폰이 있다면 헤드폰을 착용하세요)</h4>
            {param22Name === undefined && (
              <span>Надевайте наушники, если у вас есть</span>
            )}
          </div>
          <div className={classes.ButtonWrapper}>
            <Button
              onPress={() => state.close()}
              className={classes.ConfirmButton}
            >
              <pre>
                {`네\n`}
                {param22Name === undefined && <span>Да</span>}
              </pre>
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

VideoPage.displayName = "VideoPage";

export default VideoPage;
