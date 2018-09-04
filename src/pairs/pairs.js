const carMessage = 'car';
const cdrMessage = 'cdr';

export const cons = (a, b) => {
  const pair = (msg) => {
    switch (msg) {
      case carMessage:
        return a;
      case cdrMessage:
        return b;
      default:
        return undefined;
    }
  };

  pair.pair = true;

  return pair;
};

export const isPair = pair => typeof pair === 'function' && pair.pair === true;

export const car = pair => pair(carMessage);
export const cdr = pair => pair(cdrMessage);

export const reversePair = pair => cons(cdr(pair), car(pair));

export const toString = pair => `(${car(pair)}, ${cdr(pair)})`;
