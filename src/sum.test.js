import sum from './sum';

test('Sum correctly adds two basic numbers', () => {
  expect(sum(2, 2)).toBe(4);
});

test('Sum adds an arbitrary amount of numbers', () => {
  const count = Math.random() * 1000;
  const arr = [];
  let accum = 0;

  for (let i = 0; i < count; i += 1) {
    arr[i] = i;
    accum += i;
  }

  expect(sum(...arr)).toEqual(accum);
});

test('Sums are calculated consistently', () => {
  expect(sum(4, 5, 6, 7, 8)).toBeGreaterThan(sum(1, 2, 3, 4, 5));
});
