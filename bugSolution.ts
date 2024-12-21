function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

let result1 = add(5, 3); // result1 is 8
let result2 = subtract(10, 5); // result2 is 5

let num1: number = 5;
let num2: number = '10' as number; // Type assertion, use with caution!

//Using a type guard
if (isNumber(num2)) {
  let result3 = add(num1, num2);
  console.log(result3); // Output: 15
} else {
  console.log('Not a number');
}

console.log(result1); // Output: 8
console.log(result2); // Output: 5