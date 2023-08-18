export const debounce = (fn) => {
  let raf = NaN;

  return (...args) => {
    if (raf) return;

    raf = requestAnimationFrame(() => {
      fn(...args);
      raf = NaN;
    });
  };
};
