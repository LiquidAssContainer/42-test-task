import { useEffect } from 'react';

type Callback = () => void;

export const useOnScrollEnd = (fn: Callback, modifier: number = 0) => {
  const handleScroll = () => {
    const documentHeight = document.body.scrollHeight;
    const currentScroll = window.scrollY + window.innerHeight;

    if (currentScroll + modifier > documentHeight) {
      fn();
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
};
