export const reverseStr = str => str.split('').reverse().join('');

export const identity = word => word;

export const wc = (word, text) => {
  const re = new RegExp(word, 'g');
  return (text.match(re) || []).length;
};

export const gcd = (a, b) => (b ? gcd(b, a % b) : a);
