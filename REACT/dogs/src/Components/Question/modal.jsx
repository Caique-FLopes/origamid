import { useState } from 'react';

const Modal = () => {
  const [open, setOpen] = useState(null);

  if (open) {
    return <div></div>;
  }
};

export default Modal;
