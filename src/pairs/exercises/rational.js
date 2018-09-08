import { cons, car, cdr } from '../pairs';

export const make = (num, den) => cons(num, den); // todo consider sign and normalization

export const numer = number => car(number);
export const denom = number => cdr(number);

export const toString = number => `${numer(number)} / ${denom(number)}`; // consider normalization

export const isEqual = (num1, num2) => numer(num1) * denom(num2) === numer(num2) * denom(num1);

export const add = (num1, num2) => {
  const [n1, d1, n2, d2] = [numer(num1), denom(num1), numer(num2), denom(num2)];

  return make(n1 * d2 + n2 * d1, d1 * d2);
};

export const sub = (num1, num2) => {
  const [n1, d1, n2, d2] = [numer(num1), denom(num1), numer(num2), denom(num2)];

  return make(n1 * d2 - n2 * d1, d1 * d2);
};

export const mul = (num1, num2) => {
  const [n1, d1, n2, d2] = [numer(num1), denom(num1), numer(num2), denom(num2)];

  return make(n1 * n2, d1 * d2);
};

export const div = (num1, num2) => {
  const [n1, d1, n2, d2] = [numer(num1), denom(num1), numer(num2), denom(num2)];

  return make(n1 * d2, n2 * d1);
};
