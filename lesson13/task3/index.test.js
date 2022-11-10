import { minSquaredNumber } from "./getMinSquaredNumber.js";
it("should be null when array is empty", () => {
  const result = minSquaredNumber([]);
  expect(result).toEqual(null);
});

it("should be null when array is string", () => {
  const result1 = minSquaredNumber("ghjjkggfhj");
  expect(result1).toEqual(null);
});
it("should return min squared number when it receved the array of numbers", () => {
  const result2 = minSquaredNumber([-777, 3, -2, 6, 45, -20]);
  expect(result2).toEqual(4);
});
