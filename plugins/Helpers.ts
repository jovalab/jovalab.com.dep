export const shortSetTimeOut = (duration: number = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, duration);
  });
};
