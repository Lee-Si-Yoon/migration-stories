import React from "react";
import {
  Overlay,
  useModalOverlay,
  type AriaModalOverlayProps,
} from "react-aria";
import { type OverlayTriggerState } from "react-stately";

interface WanderModalProps extends AriaModalOverlayProps {
  state: OverlayTriggerState;
  children: React.ReactNode;
}

function WanderModal({ state, children, ...props }: WanderModalProps) {
  let ref = React.useRef(null);
  let { modalProps, underlayProps } = useModalOverlay(props, state, ref);

  if (!state.isOpen) return null;

  return (
    <Overlay>
      <div
        style={{
          position: "fixed",
          zIndex: 100,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        {...underlayProps}
      >
        <div
          {...modalProps}
          ref={ref}
          style={{
            border: "1px solid gray",
          }}
        >
          {children}
        </div>
      </div>
    </Overlay>
  );
}

WanderModal.displayName = "WanderModal";

export default WanderModal;
