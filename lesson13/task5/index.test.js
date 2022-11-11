import { reverseArray, withdraw, getAdults } from "./index.js";

it("should return null when string", () => {
  const result = reverseArray("ghjkljgfddgg");
  expect(result).toEqual(null);
});
it("should return null when null", () => {
  const result1 = reverseArray(null);
  expect(result1).toEqual(null);
});
it("should return reverse array when array", () => {
  const result2 = reverseArray([1, 2, 3, 4]);
  expect(result2).toEqual([4, 3, 2, 1]);
});

it("should return -1 where there are no money", () => {
  const res = withdraw(["Ann", "John", "Mary"], [1400, 8, 50], "John", 50);
  expect(res).toEqual(-1);
});
it("should return balance when clien has a money", () => {
  const res1 = withdraw(["Ann", "John", "Mary"], [1400, 58, 50], "John", 50);
  expect(res1).toEqual(8);
});
it("should return money when he has money", () => {
  const res2 = withdraw(["Ann", "John", "Mary"], [1400, 108, 50], "John", 50);
  expect(res2).toEqual(58);
});

it("should return people who has 18 years old", () => {
  const resultat = getAdults({ "John Doe": 18, Tom: 17, Advard: 5 });
  expect(resultat).toEqual({ "John Doe": 18 });
});
it("should return empty when empty", () => {
  const resultat1 = getAdults({});
  expect(resultat1).toEqual({});
});
it("should return people who has 18 years old", () => {
  const resultat = getAdults({ "John Doe": 18, Tom: 17, Advard: 29 });
  expect(resultat).toEqual({ "John Doe": 18, Advard: 29 });
});
