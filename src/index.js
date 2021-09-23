const getSquare = (number) => number ** 2;

const squareOfSum = (number) => {
  const results = [];
  for (let i = 0; i <= 10; i++) {
    results.push(getSquare(number * 2) + 1);
  }

  return results;
};

export { squareOfSum };
export default getSquare;