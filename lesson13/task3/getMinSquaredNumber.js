export const minSquaredNumber = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  } else if (arr.length == 0) {
    return null;
  }
  const square = arr.map((num) => num * num);
  const result = square.reduce((acc, num) => {
    if (acc > num) {
      acc = num;
    }
    return acc;
  }, 100000000000000000000000000000);
  return result;
};
const arr = [-777, 3, 2, 6, 45, -20];
console.log(minSquaredNumber(arr));
