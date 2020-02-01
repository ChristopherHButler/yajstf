module.exports = {
  sum(a, b) {
    return a + b;
  },
  
  forEach(arr, fn) {
    for (let element of arr) {
      fn(element);
    }
  }
};