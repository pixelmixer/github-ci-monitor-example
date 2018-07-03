import sum from './sum';

test('Sum correctly adds two basic numbers', () => {
  expect(sum(1, 2)).toBe(3);
});
