const sum = require('./sum');

test('should sum the params', () => {
  let result = sum(2, 4);
  
  expect(result).toBe(6);
});