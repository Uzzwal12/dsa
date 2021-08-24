function product(array) {
  if (array.length === 0) return null;

  if (array.length === 1) return array[0];

  return array[0] * product(array.slice(1));
}

console.log(product([]));
