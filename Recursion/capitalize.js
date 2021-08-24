function cap(arr) {
  if (arr.length === 0) return [];

  return [arr[0].charAt(0).toUpperCase() + arr[0].slice(1)].concat(
    cap(arr.slice(1))
  );
}

console.log(cap(["cat", "taco"]));
