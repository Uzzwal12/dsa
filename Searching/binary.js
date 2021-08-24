function binary(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.round((right + left) / 2);
  
  while(arr[mid]!==value && left<=right){
    if(value>arr[mid]){
      left=mid+1
    }else{
      right=mid-1
    }
       mid = Math.round((right + left) / 2);
  }

  return arr[mid] === value ? mid : -1
}

console.log(binary([1, 2, 4, 6, 7, 8, 10, 20, 23, 43], 20))