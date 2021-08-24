const obj = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

function nestedEvenSum (obj) {
  let values = Object.values(obj);
  if(values.length===0)
    return 0
    
  let sum = 0; 
  for(let i = 0;i<values.length;i++){
     if(typeof values[i] === 'object' && values[i] !== null){
         sum+=nestedEvenSum(values[i])
        }
        else{
            if(!isNaN(values[i]) && values[i]%2===0)
            sum+=values[i]
        }
    }
    return sum
}

nestedEvenSum(obj);