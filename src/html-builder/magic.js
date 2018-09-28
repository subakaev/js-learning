const f = (...numbers) => {
  const sum = numbers.reduce((acc, x) => x + acc, 0);
  const inner = (...rest) => f(sum, ...rest);
  inner.valueOf = () => sum;
  return inner;
};

export default f;
