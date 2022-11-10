import getSum, { getSquaredArray, getOddNumbers } from "./calculator.js";
it("should get squared number", () => {
  const result = getSquaredArray([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
});
it("should odd numbers only", () => {
  const result1 = getOddNumbers([1, 2, 3, 4, 5]);
  expect(result1).toEqual([1, 3, 5]);
});
it("should get sum of numbers", () => {
  const result2 = getSum(8, 4);
  expect(result2).toEqual(12);
});
