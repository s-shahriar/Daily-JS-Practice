//  Array

let array = [1,2,3]

//How do you add an element to the start of an array?
array.unshift(0)
console.log(array)

//How do you remove the first element from an array?
array.shift()
console.log(array)


//How do you check if an element exists in an array?
function findElement(array, target){
    for (const item of array) {
        if(item === target) return true
    }
    return false
}
console.log(findElement(array, 1));
console.log(array.includes(1))


//How do you find the index of an element in an array?
function findElementIndex(array, target){
    for (let i=0; i< array.length; i++){
        if(array[i] === target) return i
    }
    return -1
}
console.log(findElementIndex(array, 3));
console.log(array.indexOf(3));


//How can you check if two arrays are equal?
const isArrayEqual = (array1, array2) => {
    return array1.length === array2.length && array1.every(item=> array1[item] === array2[item])
}

console.log(isArrayEqual([1, 2, 3], [1, 2, 3]));
console.log(isArrayEqual([1, 2, 3], [1, 3, 2]));


//Find the longest word length & Find the longest word
const words = ['apple', 'banana', 'cherry', 'dragonfruit', 'elderberry'];
function longestWordLength(words){
    let wordLength = 0;
    let largestWord = null;
    words.forEach((word)=>{
        if(wordLength < word.length){
            wordLength = word.length
            largestWord = word
        }
    })
    return {wordLength, largestWord}
}
console.log(longestWordLength(words));

//Calculate the average score of students who scored above 90
const students = [
    { name: 'John', score: 85 },
    { name: 'Sarah', score: 92 },
    { name: 'Michael', score: 88 },
    { name: 'Emma', score: 95 },
    { name: 'Daniel', score: 90 },
];

const above90Students = students
    .filter((student) => student.score > 90)
console.log(above90Students);

const above90StudentsAverage = above90Students.reduce((acc,student, index, array)=> {
    acc += student.score / array.length
    return acc
},0)
console.log(above90StudentsAverage)


//Capitalize the first letter of each word in the array
const strings = ['hello world', 'i am openai', 'welcome to javascript'];
const capitalizedStrings = strings.map(word=> word.charAt(0).toUpperCase() + word.substring(1))
console.log(capitalizedStrings)


//Calculate the factorial of the largest number in the array
const numbers = [5, 2, 8, 4, 3];

function largestFactorial(numbers){
    let max = Math.max(...numbers)
    function factiorial(num){
        if(num === 0 || num === 1) return num
        return num * factiorial(num-1)
    }
    return factiorial(max)
}

console.log(largestFactorial(numbers))



// Find the largest factorial
const largestFactorialA = numbers.reduce((largest, num) => {
    const currentFactorial = factorial(num);
    return currentFactorial > largest ? currentFactorial : largest;
}, 1);

console.log(largestFactorial(numbers)); // Output: 40320


function sumOfDigits(num){
    let ans = 0
    while(num > 0){
        ans
        ans += num%10;
        ans
        num = Math.floor(num/10)
        num
    }
    return ans
}


console.log(sumOfDigits(12807)); // 18


function countDigits(num){
    num = Math.abs(num);
    let count = 0;
    do {
        count++;
        num = Math.floor(num / 10);
    } while (num > 0);
    return count;
}

console.log(countDigits(121)); // 3
console.log(countDigits(-1211413131)); // 10


const orders = [
    { product: 'iPhone', price: 999, quantity: 2 },
    { product: 'Samsung Galaxy', price: 899, quantity: 1 },
    { product: 'Google Pixel', price: 799, quantity: 3 },
];

const totalAmount = orders.reduce((prev,curr)=> {
    return prev += curr.price * curr.quantity
}, 0)

console.log(totalAmount); 