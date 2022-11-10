export const minSquaredNumber = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  } else if (arr.length == 0) {
    return null;
  }
  const square = arr.map((num) => num * num);
  console.log(square);
  let min = square[0];
  for (let i = 0; i < square.length; i++) {
    if (min > square[i]) {
      min = square[i];
    }
  }
  return min;
};
