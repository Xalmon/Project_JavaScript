const sum = require("./sum");

test("that numbers can be added", () => {
  expect(sum(2, 3)).toBe(5);
});
