import { cons } from '../../../src/pairs/pairs';
import findPrimitiveBox from '../../../src/pairs/exercises/findPrimitiveBox';

test('findPrimitiveBox test', () => {
  expect(findPrimitiveBox(1)).toBeUndefined();

  const box = cons(1, 1);
  expect(findPrimitiveBox(box)).toBe(box);
  expect(findPrimitiveBox(cons(null, box))).toBe(box);
  expect(findPrimitiveBox(cons('text', box))).toBe(box);
  expect(findPrimitiveBox(cons(box, null))).toBe(box);
  expect(findPrimitiveBox(cons(box, 'text'))).toBe(box);
  expect(findPrimitiveBox(cons(1, cons(2, box)))).toBe(box);
  expect(findPrimitiveBox(cons(cons(2, cons(3, box)), 1))).toBe(box);
});
