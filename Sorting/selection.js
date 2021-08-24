function selection(arr) {
  let min;
  let temp;
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

console.log(selection([10, 2, 8, 3, 1]));
