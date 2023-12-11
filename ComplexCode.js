/*
Filename: ComplexCode.js
Content: Complex JavaScript Code Example
*/

// Helper function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  
  return true;
}

// Function that generates the nth Fibonacci number
function fibonacci(n) {
  if (n <= 0) return null;
  if (n === 1) return 0;
  if (n === 2) return 1;

  let fib1 = 0;
  let fib2 = 1;
  let fibN;

  for (let i = 3; i <= n; i++) {
    fibN = fib1 + fib2;
    fib1 = fib2;
    fib2 = fibN;
  }

  return fibN;
}

// Class representing a geometric shape
class Shape {
  constructor(name, sides) {
    this.name = name;
    this.sides = sides;
  }

  getPerimeter() {
    return this.sides.reduce((a, b) => a + b, 0);
  }
}

// Function that sorts an array of strings alphabetically
function sortStrings(strings) {
  return strings.sort((a, b) => a.localeCompare(b));
}

// Complex function that performs various operations on numbers
function complexOperation(num1, num2) {
  let sum = num1 + num2;

  if (sum % 2 === 0) {
    let diff = num1 - num2;

    for (let i = 0; i < diff; i++) {
      if (isPrime(i)) {
        sum *= i;
      }
    }
  } else {
    let product = num1 * num2;

    for (let i = 1; i <= product; i++) {
      if (isPrime(i)) {
        sum -= i;
      }
    }
  }

  return sum;
}

// Usage of the above functions and classes
console.log("Fibonacci sequence:");
for (let i = 1; i <= 10; i++) {
  console.log(`Fibonacci(${i}): ${fibonacci(i)}`);
}

console.log("\nShapes:");
const circle = new Shape("Circle", [0, 0, 0]);
console.log(`Shape: ${circle.name}`);
console.log(`Perimeter: ${circle.getPerimeter()}`);

const rectangle = new Shape("Rectangle", [5, 3, 5, 3]);
console.log(`Shape: ${rectangle.name}`);
console.log(`Perimeter: ${rectangle.getPerimeter()}`);

console.log("\nString sorting:");
const strings = ["Apple", "Banana", "Cherry", "Dates"];
console.log("Original strings:", strings);
console.log("Sorted strings:", sortStrings(strings));

console.log("\nComplex operation:");
console.log("Result:", complexOperation(5, 7));