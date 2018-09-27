/* eslint-disable no-return-assign */

const debounce = (callback, delay, interval) => (...args) =>
  clearTimeout(interval, (interval = setTimeout(callback, delay, ...args)));

export default debounce;
