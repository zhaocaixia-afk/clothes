// 公共方法
// 公共仿抖动函数
export function debounce(func, delay) {
  let timer = null;
  return function(...args) {
    if (timer) clearInterval(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
