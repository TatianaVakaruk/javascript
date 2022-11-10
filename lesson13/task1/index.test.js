it("should 17 allways be 17", () => {
  expect(17).toEqual(17);
});
it("should not 18 be 17", () => {
  expect(18).not.toEqual(17);
});
const getEvenNumbers = (numbers) => numbers.filter((num) => num % 2 === 0);
it("should get only even Numbers from array", () => {
  const result = getEventNumbers([1, 2, 3, 4, 5]);
  expect(result).toEqual([2, 4]);
});
