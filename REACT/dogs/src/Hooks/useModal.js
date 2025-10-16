import React, { useEffect, useState } from 'react';

export default function useModal() {
  const [open, setOpen] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    async function fetchQuestion() {
      try {
        setLoading(true);
        const res = await fetch('url');
        const json = res.json();
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchQuestion();
  }, [open]);

  return {
    open,
    setOpen,
  };
}
