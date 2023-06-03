export const throttle = (
  fn: (...args: unknown[]) => void,
  timeout: number = 100,
) => {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function resultFn(...args: unknown[]) {
    if (timer) {
      return;
    }

    timer = setTimeout(() => {
      fn(...args);
      clearTimeout(timer!);
      timer = null;
    }, timeout);
  };
};
