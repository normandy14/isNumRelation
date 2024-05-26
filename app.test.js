// const hello = require('./new');
const { isNumRelation } = require("./app");

/*
test ('tests hello world', () => {
  expect(hello()).toBe(true);
});
*/

test ('tests isNumRelation isAll Even', () => {
  const numList = [10, 20, 30, 40];
  let relation = new isNumRelation(numList);
  expect (relation.isAllEven()).toBe(true);
});

test ('tests isNumRelation isAll Even small', () => {
  const numList = [2, 4, 6, 8];
  let relation = new isNumRelation(numList);
  expect (relation.isAllEven()).toBe(true);
});

test ('tests isNumRelation not isAll Even', () => {
  const numList = [11, 20, 29, 35];
  let relation = new isNumRelation(numList);
  expect (relation.isAllEven()).toBe(false);
});

test ('tests isNumRelation not isAll Even small', () => {
  const numList = [2, 3, 4, 5];
  let relation = new isNumRelation(numList);
  expect (relation.isAllEven()).toBe(false);
});

test ('tests isNumRelation isAll Odd', () => {
  const numList = [13, 27, 51, 61];
  let relation = new isNumRelation(numList);
  expect (relation.isAllOdd()).toBe(true);
});

test ('tests isNumRelation isAll Odd small', () => {
  const numList = [3, 5, 7, 9];
  let relation = new isNumRelation(numList);
  expect (relation.isAllOdd()).toBe(true);
});

test ('tests isNumRelation not isAll Odd', () => {
  const numList = [10, 20, 51, 75];
  let relation = new isNumRelation(numList);
  expect (relation.isAllOdd()).toBe(false);
});

test ('tests isNumRelation not isAll Odd small', () => {
  const numList = [3, 4, 5, 6];
  let relation = new isNumRelation(numList);
  expect (relation.isAllOdd()).toBe(false);
});

test ('tests noRelation false because Odd', () => {
  const numList = [11, 27, 51, 81];
  let relation = new isNumRelation(numList);
  expect (relation.isNoRelation()).toBe(false);
});

test ('tests noRelation false because Odd small', () => {
  const numList = [3, 5, 7, 9];
  let relation = new isNumRelation(numList);
  expect (relation.isNoRelation()).toBe(false);
});

test ('tests noRelation false because Even', () => {
  const numList = [20, 40, 60, 80];
  let relation = new isNumRelation(numList);
  expect (relation.isNoRelation()).toBe(false);
});

test ('tests noRelation false because Even small', () => {
  const numList = [2, 4, 6, 8];
  let relation = new isNumRelation(numList);
  expect (relation.isNoRelation()).toBe(false);
});

test ('tests noRelation is true', () => {
  const numList = [20, 41, 65, 75];
  let relation = new isNumRelation(numList);
  expect (relation.isNoRelation()).toBe(true);
});

test ('tests noRelation is true small', () => {
  const numList = [1, 4, 7, 9];
  let relation = new isNumRelation(numList);
  expect (relation.isNoRelation()).toBe(true);
});

/*
test('first test from isNumRelation', () => {
  const numList = [1, 3, 5, 7];
  let relation = isNumRelation(numList);
  expect (relation.isAllOdd()).toBe(True);
});
*/
