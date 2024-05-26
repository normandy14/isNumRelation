// const isNumRelation = require('./isNumRelation');
const hello = require('./new');
const { isNumRelation } = require("./app");

test ('tests hello world', () => {
  expect(hello()).toBe(true);
});

test ('tests isNumRelation isAll Odd', () => {
  const numList = [1, 3, 5, 7];
  let relation = new isNumRelation(numList);
  expect (relation.isAllOdd()).toBe(true);
});

/*
test('first test from isNumRelation', () => {
  const numList = [1, 3, 5, 7];
  let relation = isNumRelation(numList);
  expect (relation.isAllOdd()).toBe(True);
});
*/
