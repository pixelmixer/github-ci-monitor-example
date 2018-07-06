import sum from './sum';

test('Sum correctly adds two basic numbers', () => {
  expect(sum(2, 2)).toBe(4);
});

test('Sum adds 80 to 20 and results in 100', () => expect(sum(80, 20)));
