// =============================================== A. Part 1: Coding Questions (7.5 Grade) ==================================

//#region A.Part 1.1 :: Convert the string "123" to a number and add 7.(0.5 Grade)
const str = "123";
const output = Number(str) + 7;
// const output = +str + 7; // another solution
console.log(output); // 130
//#endregion


//#region A.Part 1.2 :: Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
const checkFalsy = (value) => {
  if (!value) {
    return "Invalid";
  }
  else {
    return "Valid";
  }
}

/*
Falsy values in JavaScript:
- false
- 0
- ""
- null
- undefined
- NaN
*/

console.log(checkFalsy(0)); // Invalid
console.log(checkFalsy("")); // Invalid
console.log(checkFalsy(null)); // Invalid
console.log(checkFalsy(undefined)); // Invalid
console.log(checkFalsy(NaN)); // Invalid
console.log(checkFalsy("Hello")); // Valid
//#endregion


//#region A.Part 1.3 :: Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
// to check if a number is even, we can use the modulus operator (%) when number % 2 === 0, it is even
for (let i = 1; i <= 10; i++) {
  // check if the number is even
  if (i % 2 === 0) {
    continue; // skip the even number and continue to the next iteration
  }
  console.log(i);
}

// output: 1, 3, 5, 7, 9
//#endregion


//#region A.Part 1.4 :: Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
// const numbers = [1, 2, 3, 4, 5];
const numbers = Array.from({ length: 5 }, (_, i) => i + 1); // creates an array [1, 2, 3, ..., 10]
// console.log(numbers); // [1, 2, 3, 4, 5]

const evenNumbers = numbers.filter(num => num % 2 === 0);


console.log(evenNumbers); // [2, 4]
//#endregion


//#region A.Part 1.5 :: Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
const nums1 = [1, 2, 3]
const nums2 = [4, 5, 6]

const merged = [...nums1, ...nums2];
// const merged = nums1.concat(nums2); //another solution using the concat method

console.log(merged); // [1, 2, 3, 4, 5, 6]
//#endregion


//#region A.Part 1.6 :: Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday). (0.5 Grade)
const getDayOfWeek = (dayNumber) => {
  switch (dayNumber) {
    case 1: return "Sunday";
    case 2: return "Monday";
    case 3: return "Tuesday";
    case 4: return "Wednesday";
    case 5:  return "Thursday";
    case 6: return "Friday";
    case 7:  return "Saturday";
    default: return "Invalid day number";
  }
}

// Another solution using an array and the day number as an index
// const getDayOfWeek = (dayNumber) => {
//   const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   if (dayNumber < 1 || dayNumber > 7) {
//     return "Invalid day number";
//   } else {
//     return days[dayNumber - 1];
//   }
// }

console.log(getDayOfWeek(-1)); // Invalid day number
console.log(getDayOfWeek(0)); // Invalid day number
console.log(getDayOfWeek(1)); // Sunday
console.log(getDayOfWeek(2)); // Monday
console.log(getDayOfWeek(3)); // Tuesday
console.log(getDayOfWeek(4)); // Wednesday
console.log(getDayOfWeek(5)); // Thursday
console.log(getDayOfWeek(6)); // Friday
console.log(getDayOfWeek(7)); // Saturday
console.log(getDayOfWeek(8)); // Invalid day number
//#endregion


//#region A.Part 1.7 :: Create an array of strings and return their lengths using map method (0.5 Grade)
const strs = ["a", "ab", "abc"]
const lengths = strs.map(str => str.length);
console.log(lengths); // [1, 2, 3]
//#endregion


//#region A.Part 1.8 :: Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)
const isDivisibleBy3And5 = (num) => {
  if (typeof num !== "number") return "Invalid input, please provide a number";

  if(num % 3 === 0 && num % 5 === 0) {
    return  "True:: Divisible by both";
  }else {
    return "False:: Not divisible by both";
  }
}

console.log(isDivisibleBy3And5(15)); // True:: Divisible by both
console.log(isDivisibleBy3And5(10)); // False:: Not divisible by both
console.log(isDivisibleBy3And5(9)); // False:: Not divisible by both
console.log(isDivisibleBy3And5(30)); // True:: Divisible by both
console.log(isDivisibleBy3And5("15")); // Invalid input, please provide a number
//#endregion


//#region A.Part 1.9 :: Write a function using arrow syntax to return the square of a number (0.5 Grade)
const square = (num) => num * num;
console.log(square(5)); // 25
//#endregion


//#region A.Part 1.10 :: Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)
const person = {name: 'John', age: 25}

const formatPerson = ({ name , age }) => {
  if (!name || !age) return "Invalid input, please provide both name and age";

  if (typeof name !== "string" || typeof age !== "number") return "Invalid input, please provide a valid name and age";

  return `${name} is ${age} years old.`;
}

console.log(formatPerson({name: "John", age: 25})); // John is 25 years old.
console.log(formatPerson({name: "Jane", age: 30})); // Jane is 30 years old.
console.log(formatPerson({name: "Bob", age: "35"})); // Invalid input, please provide a valid name and age.
console.log(formatPerson({name: "Alice"})); // Invalid input, please provide both name and age.
//#endregion


//#region A.Part 1.11 :: Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
const sum = (...nums) => {
  let sumation = 0;
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] !== "number") {
      throw new Error("Invalid input, please provide only numbers");
    }
    sumation += nums[i];
  }
  return sumation;
}

// Another solution using arguments object
// const sum = function () {
//   let sumation = 0;
//   for (const num of arguments) {
//     if (typeof num !== "number") {
//       throw new Error("Invalid input, please provide only numbers");
//     }
//     sumation += num;
//   }
//   return sumation;
// }

// Another solution using reduce method
// const sum = (...nums) => {
//   const sumation = nums.reduce((acc, curr) => {
//     if (typeof curr !== "number") {
//       throw new Error("Invalid input, please provide only numbers");
//     }
//     return acc + curr;
//   }, 0);
//   return sumation;
// }

console.log(sum(1, 2, 3, 4, 5)); // 15
//#endregion


//#region A.Part 1.12 :: Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
const delayedSuccess = () => {
  return new Promise((resolve, _) => {
    const startTime = Date.now();
    setTimeout(() => {
      resolve("Success");
      const endTime = Date.now();
      console.log(`Time taken: ${((endTime - startTime) / 1000).toFixed(0)}s`);
    }, 3000);
  });
}

delayedSuccess().then((message) => {
  console.log(message); // Success
}).catch((error) => {
  console.error(error);
});
//#endregion


//#region A.Part 1.13 :: Write a function to find the largest number in an array. (0.5 Grade)
const findMax = (arr) => {
  // check if the input is an array and not empty
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Invalid input, please provide a non-empty array");
  }

  // check if every element in the array is a number
  const isEvertyElementNumber = arr.every((num) => typeof num === "number");
  if (!isEvertyElementNumber) {
    throw new Error("Invalid input, please provide an array of numbers");
  }

  return Math.max(...arr);
}

// Another solution using reduce method
// const findMax = (arr) => {
//   if (!Array.isArray(arr) || arr.length === 0) {
//     throw new Error("Invalid input, please provide a non-empty array");
//   }

//   const max = arr.reduce((acc, curr) => {
//     if (typeof curr !== "number") {
//       throw new Error("Invalid input, please provide an array of numbers");
//     }
//     return curr > acc ? curr : acc;
//   }, arr[0]);

//   return max;
// }

console.log(findMax( [1, 3, 7, 2, 4])); // 7
//#endregion


//#region A.Part 1.14 :: Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
const personObject = { name: "John", age: 30 }

const getObjectKeys = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    throw new Error("Invalid input, please provide a valid object");
  }

  return Object.keys(obj);
}

// const getObjectKeys = (obj) => {
//   if (typeof obj !== "object" || obj === null) {
//     throw new Error("Invalid input, please provide a valid object");
//   }

//   const keys = [];
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       console.log(key);
//       keys.push(key);
//     }
//   }

//   return keys;
// }

console.log(getObjectKeys(personObject)); // ["name", "age"]
//#endregion


//#region A.Part 1.15 :: Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
const splitString = (str) => {
  if (typeof str !== "string") {
    throw new Error("Invalid input, please provide a valid string");
  }

  return str.split(" ");
}

console.log(splitString("The quick brown fox")); // ["The", "quick", "brown", "fox"]
//#endregion



// =============================================== B. Part 2: Essay Questions (2.5 Grade) ==================================


//#region B. Part 2.1 :: What is the difference between forEach and for...of? When would you use each? (0.5 Grade)
// forEach is a method that calls a function for each element in an array.
// It is used when you want to perform an action on each element of an array, but it does not return a new array.
// forEach cannot be used with break or continue statements, and it does not work with asynchronous code.
// Example of forEach:
const arr = [1, 2, 3];
arr.forEach(num => {
  console.log(num);
});

// for...of is a loop that iterates over iterable objects (like arrays, strings, maps, sets, etc.).
// It can be used with break and continue statements, and it can work with asynchronous code. for...of is more flexible than forEach and can be used in more scenarios.
// Example of for...of:
for (const num of arr) {
  console.log(num);
}
//#endregion


//#region B. Part 2.2 :: What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples. (0.5 Grade)
// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase.
// This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations.

// Example of hoisting with var:
console.log(hoistedVar); // undefined
var hoistedVar = "I am hoisted";

// Example of hoisting with function:
hoistedFunction();
function hoistedFunction() {
  console.log("I am a hoisted function");
}

// Example of hoisting with let and const:
// console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = "I am not hoisted";
// console.log(hoistedConst); // ReferenceError: Cannot access 'hoistedConst' before initialization
const hoistedConst = "I am not hoisted";

// Temporal Dead Zone (TDZ) is the time between the start of the block and the point where a variable is declared and initialized.
// During this time, if you try to access the variable, it will throw a ReferenceError.
// This applies to variables declared with let and const, but not with var.

// Example of TDZ:
{
  // console.log(tdzVar); // ReferenceError: Cannot access 'tdzVar' before initialization
  let tdzVar = "I am in TDZ";
  console.log(tdzVar); // I am in TDZ
}
//#endregion


//#region B. Part 2.3 :: What are the main differences between == and ===? (0.5 Grade)
// The == operator is the equality operator, which compares two values for equality after performing type coercion.
// The === operator is the strict equality operator, which compares two values for equality without performing type coercion.

// Example of ==:
console.log(5 == "5"); // true (because "5" is converted to 5)

// Example of ===:
console.log(5 === "5"); // false (because 5 is a number and "5" is a string)
//#endregion


//#region B. Part 2.4 :: Explain how try-catch works and why it is important in async operations. (0.5 Grade)
// The try-catch statement is used to handle exceptions in JavaScript. It allows you to write code that may throw an error in the try block, and if an error occurs, the catch block will execute, allowing you to handle the error gracefully without crashing the program.

// Example of try-catch:
try {
  // Some code that might throw an error
  let result = 10 / 0;
  console.log(result);
} catch (error) {
  // Handle the error
  console.error("An error occurred:", error.message);
}

// In async operations, try-catch is important because it allows you to handle errors that may occur during asynchronous code execution, such as network requests or file operations. Without proper error handling, your application may crash or behave unexpectedly.

// Example of try-catch in async operation:
const fetchData = async () => {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("An error occurred while fetching data:", error.message);
  }
};

fetchData();

// In this example, if the fetch request fails or the response is not ok, the error will be caught in the catch block, allowing you to handle it appropriately without crashing the application.
//#endregion


//#region B. Part 2.5 :: What’s the difference between type conversion and coercion? Provide examples of each. (0.5 Grade)
// Type conversion is the process of explicitly converting a value from one type to another using built-in functions or methods. It is done intentionally by the programmer.

// Example of type conversion:
const strNum = "123";
const convertedNum = Number(strNum); // Explicitly converting string to number
console.log(convertedNum); // 123

// Coercion is the process of implicitly converting a value from one type to another by the JavaScript engine. It happens automatically when performing operations that require a specific type.

// Example of coercion:
const num = 5;
const coercedStr = num + "5"; // Implicitly converting number to string during concatenation
console.log(coercedStr); // "55" (number 5 is coerced to string "5" and concatenated)
//#endregion
