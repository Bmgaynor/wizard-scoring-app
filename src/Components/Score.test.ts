import { getScore } from "./Score";

test("getScore: should return positive score", () => {
  expect(
    getScore({
      actual: 0,
      guess: 0,
      number: 1,
    })
  ).toBe(20);
  expect(getScore({ guess: 0, number: 1, actual: null })).toBe(0);
  expect(
    getScore({
      guess: 5,
      number: 1,
      actual: 5,
    })
  ).toBe(70);
});

test("getScore: should return negative score", () => {
  expect(
    getScore({
      actual: 0,
      guess: 5,
      number: 5,
    })
  ).toBe(-50);
  expect(
    getScore({
      guess: 0,
      number: 1,
      actual: 3,
    })
  ).toBe(-30);
});
