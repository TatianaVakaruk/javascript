import { calc } from "./calculator.js";
it("should return + when +", () => {
  const res = calc("6 + 2");
  expect(res).toEqual("6 + 2 = 8");
});
it("shoult return - when -", () => {
  const res1 = calc("6 - 2");
  expect(res1).toEqual("6 - 2 = 4");
});
it("should return * when *", () => {
  const res2 = calc("6 * 2");
  expect(res2).toEqual("6 * 2 = 12");
});
it("should return / when /", () => {
  const res3 = calc("6 / 2");
  expect(res3).toEqual("6 / 2 = 3");
});
it("shoult return null when null", () => {
  const res4 = calc(null);
  expect(res4).toEqual(null);
});
if (
  ("should return null when number",
  () => {
    const res5 = calc(6 / 2);
    expect(res5).toEqual(null);
  })
);
it("should return null when NaN", () => {
  const res6 = calc(NaN);
  expect(res6).toEqual(null);
});
if (
  ("should return null when undefined",
  () => {
    const res7 = calc(undefined);
    expect(res7).toEqual(null);
  })
);
