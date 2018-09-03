const carMessage = 'car';
const cdrMessage = 'cdr';


export const cons = (a, b) => (msg) => {
  switch (msg) {
    case carMessage:
      return a;
    case cdrMessage:
      return b;
    default:
      return undefined;
  }
};

export const car = pair => pair(carMessage);
export const cdr = pair => pair(cdrMessage);
