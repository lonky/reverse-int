module.exports = function reverse(n) {
  const res = Number(String(Math.abs(n)).split('').reverse().join(''));
  return res;
};
