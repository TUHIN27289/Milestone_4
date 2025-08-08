// # array-looping-tasks

// ### Task 1

// Write a JavaScript code to reverse the array colors `without using the reverse method`.

// **Input:**
const colors = ["red", "blue", "green", "yellow", "orange"];
const reversed_ = [];
for (let i = 0; i <= colors.length - 1; i++) {
  reversed_.unshift(colors[i]);
}
console.log(reversed_);

// **Output:**ƒ
// `['orange', 'yellow', 'green', 'blue', 'red']`

// ---

// ### Task 2

// Write a JavaScript code to get the even numbers from an array using any looping technique.

// **Input:**
const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenArray = [];
for (const num of numbers) {
  if (num % 2 === 0) {
    // console.log(num);
    evenArray.push(num);
  }
}
console.log(evenArray);

const evenNumber = numbers.filter((num) => num % 2 === 0);
console.log(evenNumber);

// **Output:**

// `[12, 98, 76, 46]`

// ---

// for(let i=0;i<=numbers.length;i++)
// {
//     if(numbers[i]%2===0){
//         console.log(numbers[i]);
//     }
// }

// ### Task 3

// Use a for...of loop to concatenate all the elements of an array into a single string.

// **Input:**

var numbers_ = ["Tom", "Tim", "Tin", "Tik"];
const cat = numbers_.join("");
console.log(cat);

// **Output:**

// `'TomTimTinTik'`

// ---

// ### Task 4 (Hard)

// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// **Input:**

const statement = "I am a hard working person";
const st = statement.split(" ").reverse().join(" ");
console.log(st);

// **Output:**

// `'person working hard a am I'`

// ---

// ### Task 5

// Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

// Input: [1, 2, 3]

// Expected Output:

// Original: [1, 2, 3]
// Copy: [99, 2, 3]

// ----
const numberA = [1, 2, 3];
const numberCopy=[...numberA];
console.log(numberA);
numberCopy[0]=99;
console.log(numberCopy)


// ### Task 6
// Given an array of student objects, print each student’s name and marks.

// ```
// [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 }
// ]
// ```
const student=[
    { name: "John", marks: 85 },
    { name: "Alice", marks: 90 }
]
for(const m of student){
    console.log(m.name+" scored "+m.marks)
}


// # Expected ooutput:
// ```
// John scored 85
// Alice scored 90
// ```

// ### Task 7
// Given a 2D array, update the value at second row first item to 99 and print the updated array.

// input:
// ```
// [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]
// ```

const ex=[
    [1, 2],
    [3, 4],
    [5, 6]
]
ex[1][0]=99;
console.log(ex)
// const examMarks = [
//   [1, 2, 3, 4, 90],
//   [5, 6, 7, 8, 111],
//   [9, 10, 11, 12, 999],
//   [13, 14, 15, 16, 200],
// ];
// console.log(examMarks)

// Expected Array:
// ```
// [
//   [1, 2],
//   [99, 4],
//   [5, 6]
// ]
// ```
