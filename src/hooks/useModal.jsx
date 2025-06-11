import { useState } from "react";

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  //funcion para abrior el modal
  const openModal = () => setIsOpen(true);
  //funcion para cerra
  const closeModal = () => setIsOpen(false);

  return {
    isOpen,
    openModal,
    closeModal,
  };
}

