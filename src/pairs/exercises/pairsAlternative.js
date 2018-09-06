export const cons = (a, b) => f => f(a, b);

export const car = pair => pair(a => a);
export const cdr = pair => pair((a, b) => b);
