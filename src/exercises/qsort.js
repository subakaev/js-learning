import {
  isEmpty, cons, head, tail, concat, filter,
} from '../pairs-list/pairs-list';

const sort = (list) => {
  if (isEmpty(list)) {
    return list;
  }

  const pivot = head(list);
  const tailList = tail(list);

  const left = filter(x => x <= pivot, tailList);
  const right = filter(x => x > pivot, tailList);

  return concat(sort(left), cons(pivot, sort(right)));
};

export default sort;
