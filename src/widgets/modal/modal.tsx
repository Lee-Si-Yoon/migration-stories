import React from 'react';
import { Dialog, DialogOverlay, DialogPortal } from '@/components/ui/dialog';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { cn } from '@/shared/cn';

type ModalVariant = 'wander' | 'primary';

interface ModalState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

interface ModalProps {
  state: ModalState;
  children: React.ReactNode;
  variant?: ModalVariant;
  isKeyboardDismissDisabled?: boolean;
  title?: string;
}

function Modal({
  state,
  children,
  variant = 'primary',
  isKeyboardDismissDisabled,
  title = 'Dialog',
}: ModalProps) {
  return (
    <Dialog open={state.isOpen} onOpenChange={(open) => (!open ? state.close() : undefined)}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 z-[100] bg-black/50" />
        <DialogPrimitive.Content
          className={cn(
            'fixed top-[50%] left-[50%] z-[101] translate-x-[-50%] translate-y-[-50%]',
            'w-auto max-w-[calc(100%-2rem)]',
            'bg-transparent',
            'focus:outline-none',
            'data-[state=closed]:animate-out data-[state=open]:animate-in',
            'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
            'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
            'duration-200'
          )}
          onEscapeKeyDown={(e) => {
            if (isKeyboardDismissDisabled) {
              e.preventDefault();
            }
          }}
          onPointerDownOutside={(e) => {
            if (isKeyboardDismissDisabled) {
              e.preventDefault();
            }
          }}
        >
          <VisuallyHidden.Root>
            <DialogPrimitive.Title>{title}</DialogPrimitive.Title>
          </VisuallyHidden.Root>
          {children}
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}

Modal.displayName = 'Modal';

export default Modal;
