import { useState, useCallback } from 'react';

interface ModalState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export function useModalState(): ModalState {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    open,
    close,
  };
}
