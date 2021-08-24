function bubble(arr) {
  let temp;
  let noSwap;
  for (let i = 0; i < arr.length; i++) {
    noSwap = true;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) {
      break;
    }
  }
  return arr;
}

console.log(bubble([10, 4, 8, 6, 1]));
