export const getMaxHeight = (elemArr) => {
  let maxHeight = 0;

  elemArr.forEach(elem => {
    if (maxHeight < elem.scrollHeight) {
      maxHeight = elem.scrollHeight;
    }
  });

  return maxHeight;
};
