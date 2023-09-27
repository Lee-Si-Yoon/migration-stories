import React from "react";
import {
  Overlay,
  useModalOverlay,
  type AriaModalOverlayProps,
} from "react-aria";
import { type OverlayTriggerState } from "react-stately";

import classes from "./wander-modal.module.scss";

interface WanderModalProps extends AriaModalOverlayProps {
  state: OverlayTriggerState;
  children: React.ReactNode;
}

function WanderModal({ state, children, ...props }: WanderModalProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [size, setSize] = React.useState<{ width: number; height: number }>();
  const { modalProps, underlayProps } = useModalOverlay(props, state, ref);

  React.useEffect(() => {
    if (!ref.current) return;
    const { width, height } = ref.current.getBoundingClientRect();
    setSize({ width, height });
  }, [ref.current]);

  if (!state.isOpen) return null;

  return (
    <Overlay>
      <div className={classes.OverlayBackground} {...underlayProps}>
        <div
          {...modalProps}
          ref={ref}
          className={classes.Modal}
          style={{
            position: "absolute",
            top: "50%",
            left: `calc(50% - ${size ? size.width / 2 : 0}px)`,
            transform: "transition(-50%, -50%)",
            width: size?.width,
            willChange: "transform",
            opacity: size ? 1 : 0,
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
