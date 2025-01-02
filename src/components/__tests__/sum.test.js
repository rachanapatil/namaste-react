import { sum } from "../sum";

test("Sum fn  should calculate the sum of function", () => {
  const result = sum(3, 4);

  //Assertion
  expect(result).toBe(7);
});
