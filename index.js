//  Array

let array = [1, 2, 3];

//How do you add an element to the start of an array?
array.unshift(0);
console.log(array);

//How do you remove the first element from an array?
array.shift();
console.log(array);

//How do you check if an element exists in an array?
function findElement(array, target) {
  for (const item of array) {
    if (item === target) return true;
  }
  return false;
}
console.log(findElement(array, 1));
console.log(array.includes(1));

//How do you find the index of an element in an array?
function findElementIndex(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}
console.log(findElementIndex(array, 3));
console.log(array.indexOf(3));

//How can you check if two arrays are equal?
const isArrayEqual = (array1, array2) => {
  return (
    array1.length === array2.length &&
    array1.every((item) => array1[item] === array2[item])
  );
};

console.log(isArrayEqual([1, 2, 3], [1, 2, 3]));
console.log(isArrayEqual([1, 2, 3], [1, 3, 2]));

//Find the longest word length & Find the longest word
const words = ["apple", "banana", "cherry", "dragonfruit", "elderberry"];
function longestWordLength(words) {
  let wordLength = 0;
  let largestWord = null;
  words.forEach((word) => {
    if (wordLength < word.length) {
      wordLength = word.length;
      largestWord = word;
    }
  });
  return { wordLength, largestWord };
}
console.log(longestWordLength(words));

//Calculate the average score of students who scored above 90
const students = [
  { name: "John", score: 85 },
  { name: "Sarah", score: 92 },
  { name: "Michael", score: 88 },
  { name: "Emma", score: 95 },
  { name: "Daniel", score: 90 },
];

const above90Students = students.filter((student) => student.score > 90);
console.log(above90Students);

const above90StudentsAverage = above90Students.reduce(
  (acc, student, index, array) => {
    acc += student.score / array.length;
    return acc;
  },
  0
);
console.log(above90StudentsAverage);

//Capitalize the first letter of each word in the array
const strings = ["hello world", "i am openai", "welcome to javascript"];
const capitalizedStrings = strings.map(
  (word) => word.charAt(0).toUpperCase() + word.substring(1)
);
console.log(capitalizedStrings);

//Calculate the factorial of the largest number in the array
const numbers = [5, 2, 8, 4, 3];

function largestFactorial(numbers) {
  let max = Math.max(...numbers);
  function factiorial(num) {
    if (num === 0 || num === 1) return num;
    return num * factiorial(num - 1);
  }
  return factiorial(max);
}
console.log(largestFactorial(numbers));

//Sum of digits of a number and digit count

function sumOfDigits(num) {
  let number = Math.abs(num);
  let ans = 0;
  let digit = 0;
  if (number === 0) return { ans: 0, digit: 0 };
  while (number > 0) {
    ans += number % 10;
    number = Math.floor(number / 10);
    digit++;
  }
  return { ans, digit };
}
console.log(sumOfDigits(-892)); // 18

//Calculate the average score of students who scored above 90

const orders = [
  { product: "iPhone", price: 999, quantity: 2 },
  { product: "Samsung Galaxy", price: 899, quantity: 1 },
  { product: "Google Pixel", price: 799, quantity: 3 },
];
const totalAmount = orders.reduce((prev, curr) => {
  return (prev += curr.price * curr.quantity);
}, 0);
console.log(totalAmount);

//Missing Number in an Array

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
//  [0,1,2,3,5] --> here missing number is 4

function missingNumber(array) {
  let givenArraySum = 0;
  for (let i = 0; i < array.length; i++) {
    givenArraySum += array[i];
  }
  givenArraySum;

  let highestNumber = Math.max(...array);
  highestNumber;

  let expectedTotal = 0;
  for (let i = 0; i <= highestNumber; i++) {
    expectedTotal += i;
  }
  expectedTotal;

  return expectedTotal - givenArraySum;
}
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));

//Count Odd Numbers in an Interval Range

//Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive)
//Input: low = 3, high = 7
//Output: 3
//Explanation: The odd numbers between 3 and 7 are [3,5,7].


const countOdds = function (low, high) {
  let count = 0;
  for (let i = low; i <= high; i++) {
    if (i % 2 !== 0) {
      count++;
    }
  }
  return count;
};
console.log(countOdds(3, 7));



//FizzBuzz
//Input: n = 5
//Output: ["1","2","Fizz","4","Buzz"]

const fizzBuzz = function (n) {
  let array = [];
  for (let i = 1; i <= n; i++) {
    let result = "";
    if (i % 3 === 0) result += "Fizz";
    if (i % 5 === 0) result += "Buzz";
    if (result === "") result = i.toString();
    array.push(result);
  }
  return array;
};

console.log(fizzBuzz(15));


//Power of Two

//Input: n = 16
//Output: true
//Explanation: 24 = 16
//Input: n = 3
//Output: false

const isPowerOfTwo = function (n) {
  const logValue = Math.log2(n);
  return logValue % 1 === 0;
};

console.log(isPowerOfTwo(16))

// String

//Length of a String
let firstName = "Vaishali";
console.log(firstName.length);

//Access String Element
console.log(firstName.charAt(2)); // i
console.log(firstName[2]); // i
console.log(firstName.charCodeAt(2)); // 115 (Ascii Code)

//Check Presence of Character
console.log(firstName.includes("r")); // false (& if present it return true)
console.log(firstName.indexOf("i")); // 2 (& if not present it return -1)
console.log(firstName.lastIndexOf("i")); // 7

//Compare Two Strings
let anotherName = "Vishal";
console.log(firstName.localeCompare(anotherName)); // -1 (& if strings are equal it return 0)

//Replace Substring
const str = "Vishal is Best Frontend Developer. Vishal is Best Developer";
console.log(str.replace("Vishal", "Sujit")); // "Sujit is Best Frontend Developer. Vishal is Best Developer. "
console.log(str.replaceAll("Vishal", "Sujit")); // "Sujit is Best Frontend Developer. Sujit is Best Developer. "

//Substring of a String
console.log(str.substring(0, 33));
console.log(str.slice(-10, -1));

//String Start and End
console.log(str.startsWith("Vishal")); // true
console.log(str.endsWith("Developer")); // true

//Convert Object to String
const obj = {
  name: "Vishal",
  course: "DSA with Vishal",
};
console.log(JSON.stringify(obj));