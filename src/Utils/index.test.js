import { random, ucFirst } from '.';

process.stdout.write('\x1Bc');

const max = 6;
test('random 1..max', () => {
  const rs = [];
  const count = 1000;
  for (let i = 0; i < count; i++) {
    rs.push(random(1, max));
  }
  const good = rs.filter((r) => r >= 1 && r <= max && Number.isInteger(r));
  expect(good).toHaveLength(count);
});

test('ucFirst', () => {
  expect(ucFirst('denis')).toBe('Denis');
  expect(ucFirst('123')).toBe('123');
  expect(ucFirst('')).toBe('');
});
