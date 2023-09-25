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
      <div
        style={{
          position: "fixed",
          zIndex: 100,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: "rgba(0, 0, 0, 0.5)",
        }}
        {...underlayProps}
      >
        <div
          {...modalProps}
          ref={ref}
          style={{
            position: "absolute",
            top: "50%",
            left: `calc(50% - ${size ? size.width / 2 : 0}px)`,
            transform: "transition(-50%, -50%)",
            width: size?.width,
            willChange: "transform",
            opacity: size ? 1 : 0,
            border: "none",
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
