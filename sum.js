// function sumAll(arr) { 
//     var max = Math.max(arr[0], arr[1]);
//     var min = Math.min(arr[0], arr[1]);
//     var temp = 0;
//     for (var i=min; i <= max; i++){
//         temp += i;
//     }
//   return(temp);
//   }
  
// sumAll([1, 4]);

// function greet(who) {
  
//     console.log("Hello " + who);
  
//   }
  
// greet("Harry");

// console.log("Bye");




// function square(x) { return x * x; }
// console.log(square(4, true, "hedgehog"));
// function square(x) { return x * x; }
// console.log(square(4));

// function minus(a, b) {
//   if (b === undefined) return -a;
//   else return a - b;
// }

// console.log(minus(10));
// // → -10
// console.log(minus(10, 5));



// function power(base, exponent = 2) {
//   let result = 1;
//   for (let count = 0; count < exponent; count++) {
//     result *= base;
//   }
//   return result;
// }

// console.log(power(4));
// // → 16
// console.log(power(2, 6));

function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());