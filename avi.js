console.log("hi avi , how are you?");
console.log("This is avi.js file");

//  array traversal using for ,while and for-of loop

//for loop
console.log("\n\n~ ~ Using for loop ~ ~ \n");
const fruits = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "kiwi",
  "lemon",
];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//  while loop
console.log("\n\n~ ~ Using while loop ~ ~ \n");
let j = 0;
while (j < fruits.length) {
  console.log(fruits[j]);
  j++;
}

// for-of loop
console.log("\n\n~ ~ Using for of loop ~ ~ \n");
for (const fruit of fruits) {
  console.log(fruit);
}

// 18_3: Reverse an Array: 3 Techniques Explained (for loop, unshift, reverse method)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let i = 0; i <= numbers.length - 1; i++) {
  console.log(numbers[i]);
}

// Reverse an Array-- using for loop
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}
// Reverse an Array-- using for loop
// using unshift
console.log("Reverse an Array-- using for loop --  using unshift");
const reversed = [];
for (let i = 0; i < numbers.length; i++) {
  reversed.unshift(numbers[i]);
}
console.log(reversed);

console.log("\n\nReverse an Array-- using for loop --  using push");
const reversed_array = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  reversed_array.push(numbers[i]);
}
console.log(reversed_array);

console.log("\n\n reverse array using while loop");
// Reverse an Array-- using while loop
let q = numbers.length - 1;
while (0 <= q) {
  console.log(numbers[q]);
  q--;
}


const numbers_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,90];

const res_array=[];
console.log('\n\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')
//using for of loop
for(const num of numbers){
    res_array.unshift(num);
}
console.log(res_array);


// using function 
const numbers____ = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 300, 500, 565, 644, 34, 12,
  23, 50, 89, 100,
];
console.log('\n\n\n using function ')
numbers____.reverse();
console.log(numbers____);