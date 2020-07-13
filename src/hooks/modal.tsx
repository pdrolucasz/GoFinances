import React, {
  createContext,
  useState,
  useCallback,
  useMemo,
  useContext,
} from 'react';

interface ModalContext {
  open: boolean;
  handleClose(): void;
  handleOpen(): void;
}

const ModalContext = createContext<ModalContext>({} as ModalContext);

export const ModalProvider: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const value = useMemo(() => ({ open, handleOpen, handleClose }), [
    open,
    handleOpen,
    handleClose,
  ]);

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export function useModal(): ModalContext {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error(`useModal must be used within a ModalProvider`);
  }

  return context;
}
