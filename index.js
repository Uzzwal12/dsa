// function gcd(num1,num2){
//   let temp = num1 < num2 ? num1 : num2
//   for(let i = temp; i>=2; i--){0
//       return i
//     }
//   }

//   return 1
// }

function gcd(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}

function lcm(num1, num2) {
  return (num1 * num2) / gcd(num1, num2);
}

function finalLcm(num) {
  let x = 1;
  for (let i = 2; i <= num; i++) {
    x = lcm(x, i);
  }

  return x;
}
console.time()
console.log(finalLcm(20));
console.timeEnd()
