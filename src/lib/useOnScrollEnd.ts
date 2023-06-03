import { useEffect } from 'react';
import { throttle } from './throttle';

type Callback = () => void;

export const useOnScrollEnd = (fn: Callback, modifier: number = 0) => {
  const handleScroll = throttle(() => {
    const documentHeight = document.body.scrollHeight;
    const currentScroll = window.scrollY + window.innerHeight;

    if (currentScroll + modifier > documentHeight) {
      fn();
    }
  }, 150);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
};
