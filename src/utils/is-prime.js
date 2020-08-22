export default (number) => {
  if (number === 1) {
    return false;
  }

  const iter = (acc) => {
    if (acc === number) {
      return true;
    }

    return number % acc === 0
      ? false
      : iter(acc + 1);
  };

  return iter(2);
};
