const stringLength = require('./practice.js');

test('length of string', () => {
  expect(stringLength('Hello')).toBe(5);
});