`use strict`

// Write a JavaScript function to check if a given number is even or odd.

function isEvenOrOdd(number) {
  if (number % 2 === 0) {
  return 'Even';
  } else {
    return 'Odd';
  }
}
const numberToCheck = 7;
const resultOne = isEvenOrOdd(numberToCheck);
console.log(`${numberToCheck} is ${result}`);

// 2.Write a JavaScript program to calculate the factorial of a number.
function factorialRecursive(number) {
  if (number === 0) {
    return 1; // Base case: 0! is defined as 1
  } else {
    return number * factorialRecursive(number - 1);
  }
}
const num = 5;
const resultTwo = factorialRecursive(num);
console.log(`The factorial of ${num} is ${result}`);

// 3.Write a JavaScript program to find the sum of all numbers in each array, excluding any numbers that are less than 0

function sumPositiveNumbersInArrays(arrays) {
  return arrays.map(array => {
    const positiveNumbers = array.filter(number => number >= 0);
    const sum = positiveNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
  });
}
const arrays = [
  [1, 2, 3, -1, 5, -2],
  [0, 2, 4, 6, -3],
  [-1, -2, -3]
];
const results = sumPositiveNumbersInArrays(arrays);
console.log(results); 

// 4.Write a JavaScript program to check if a given number, is a perfect square.
function isPerfectSquare(number) {
  if (number < 0) {
    return false; // Negative numbers are not perfect squares
  }

  const sqrt = Math.sqrt(number);
  return Number.isInteger(sqrt);
}


const num1 = 16;
if (isPerfectSquare(num1)) {
  console.log(`${num1} is a perfect square.`);
} else {
  console.log(`${num1} is not a perfect square.`);
}


//5. Write a JavaScript function to print an integer with thousands separated by commas
function thousandsSeparators(number) {
  return number.toLocaleString();
}

// Test Data
console.log(thousandsSeparators(1000));      
console.log(thousandsSeparators(10000.23));  
console.log(thousandsSeparators(100000));   

//6. Write a JavaScript program to find the Armstrong numbers of 3 digits.
// Note : An Armstrong number of three digits is an integer such that the sum of the
// cubes of its digits is equal to the number itself. For example, 371 is an Armstrong
// number since 3**3 + 7**3 + 1**3 = 371.

function findArmstrongNumbers() {
  for (let number = 100; number <= 999; number++) {
    const digit1 = Math.floor(number / 100);
    const digit2 = Math.floor((number % 100) / 10);
    const digit3 = number % 10;
    const sumOfCubes = Math.pow(digit1, 3) + Math.pow(digit2, 3) + Math.pow(digit3, 3);
    if (sumOfCubes === number) {
      console.log(`${number} is an Armstrong number.`);
    }
  }
}
findArmstrongNumbers();

// 10. In an array every element appears twice except for one. Write a JavaScript
// program to find the non-repeated element in an array using bit manipulation.
// Test Data:
// ([1]) -&gt; 1
// ([1, 2, 3]) -&gt; 0 [All elements are non- repeated]
// [1, 2, 8, 3, 1, 2, 3, 8, 6, 6, 7] -&gt; 7


function findNonRepeatedElement(arr) {
  if (arr.length === 0) {
    return 0; 
  }

  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result ^= arr[i];
  }

  return result;
}
console.log(findNonRepeatedElement([1])); 
console.log(findNonRepeatedElement([1, 2, 3])); 
console.log(findNonRepeatedElement([1, 2, 8, 3, 1, 2, 3, 8, 6, 6, 7])); 
