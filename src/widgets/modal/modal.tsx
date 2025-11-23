import React from 'react';
import { Overlay, useModalOverlay, type AriaModalOverlayProps } from 'react-aria';
import { type OverlayTriggerState } from 'react-stately';

type ModalVariant = 'wander' | 'primary';

interface ModalProps extends AriaModalOverlayProps {
  state: OverlayTriggerState;
  children: React.ReactNode;
  variant?: ModalVariant;
}

function Modal({ state, children, variant = 'primary', ...props }: ModalProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [size, setSize] = React.useState<{ width: number; height: number }>();
  const { modalProps, underlayProps } = useModalOverlay(props, state, ref);

  React.useEffect(() => {
    if (!ref.current) return;
    const { width, height } = ref.current.getBoundingClientRect();
    setSize({ width, height });
  }, [ref.current]);

  if (!state.isOpen) return null;

  const getVariantStyle = (variant: ModalVariant): React.CSSProperties => {
    if (variant === 'wander')
      return {
        width: '100%',
        position: 'absolute',
        top: '50%',
        left: `calc(50% - ${size ? size.width / 2 : 0}px)`,
        opacity: size ? 1 : 0,
      };
    else
      return {
        width: '100%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
      };
  };

  return (
    <Overlay>
      <div className="fixed inset-0 z-[100] bg-black/50" {...underlayProps}>
        <div
          {...modalProps}
          ref={ref}
          className="focus:border-0 focus:outline-none"
          style={getVariantStyle(variant)}
        >
          {children}
        </div>
      </div>
    </Overlay>
  );
}

Modal.displayName = 'Modal';

export default Modal;
