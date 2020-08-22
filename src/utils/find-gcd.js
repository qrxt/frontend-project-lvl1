const isCommonDivisor = (first, second, divisor) => (
  first % divisor === 0 && second % divisor === 0
);

export default (first, second) => {
  const iter = (acc) => {
    if (isCommonDivisor(first, second, acc)) {
      return acc;
    }

    return iter(acc - 1);
  };

  return iter(Math.max(first, second));
};
