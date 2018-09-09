export const reverseStr = str => str.split('').reverse().join('');

export const gcd = (a, b) => (b ? gcd(b, a % b) : a);
