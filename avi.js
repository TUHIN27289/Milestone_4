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

const numbers_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 90];

const res_array = [];
console.log("\n\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");
//using for of loop
for (const num of numbers) {
  res_array.unshift(num);
}
console.log(res_array);

// using function
const numbers____ = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 300, 500, 565, 644, 34, 12,
  23, 50, 89, 100,
];
console.log("\n\n\n using function ");
numbers____.reverse();
console.log(numbers____);

// 18_4: Sort Array in Ascending & Descending Order (Manual & sort() method)

const friends = [
  "Alice",
  "Avi",
  "toulir",
  "Zara",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Hannah",
  "Ivy",
  "Jack",
  "Kathy",
  "Liam",
  "Mia",
  "Noah",
  "Olivia",
  "Paul",
  "Quinn",
  "Riley",
  "Sophia",
  "avi",
  "Zara",
  "Zoe",
  "Zane",
  "Zara",
  "Zara",
  "AVI",
  "avi",
  "1229",
];
console.log(friends);
friends.sort();
console.log("\n\nSorted in Ascending Order:");
console.log(friends);

// Sorting in Descending Order
console.log("\n\n~ ~ Sorting in Descending Order ~ ~ \n");
friends.sort((a, b) => b.localeCompare(a));
console.log(friends);

const favNumbers = [5, 3, 8, 1, 4, 2, 7, 6];
console.log("\n\nOriginal Array:");
console.log(favNumbers);
favNumbers.sort();
console.log("\n\nSorted in Ascending Order:");
console.log(favNumbers);

//
const aviFavNumbers = [
  5, 3, 8, 1, 4, 2, 7, 6, 111, 222, 333, 444, 555, 666, 777, 888, 999, 768,
];
console.log("\n\nOriginal Array:");
console.log(aviFavNumbers);
// Sorting in Ascending Order using sort() method
aviFavNumbers.sort((a, b) => a - b);
console.log("\n\nSorted in Ascending Order:");
console.log(aviFavNumbers);

//SORTING IN DESCENDING ORDER
console.log("\n\n~ ~ Sorting in Descending Order ~ ~ \n");
// Sorting in Descending Order using manual method
aviFavNumbers.sort((a, b) => b - a);
console.log("\n\nSorted in Descending Order:");
console.log(aviFavNumbers);

//18_5: Array of Objects and Access Object inside an Array
const employee = [
  {
    name: "Avi ",
    profession: "web dev",
    age: "24",
    gender: "female",
    salary: "50000000",
  },
  {
    name: "Toukir",
    profession: "ciso",
    age: "26",
    gender: "male",
    salary: "2100000",
  },
  {
    name: "Shohag",
    profession: "MBBS",
    age: "32",
    gender: "male",
    salary: "9000000000000",
  },
  {
    name: "Afsana",
    profession: "MBBS",
    age: "30",
    gender: "female",
    salary: "80000000000",
  },
  {
    name: "Salma",
    profession: "UX-Designer",
    age: "26",
    gender: "female",
    salary: "70000000000",
  },
];

console.log(employee); // full array of object
console.log(employee[0]); // first object of array

// using for loop array of object print.
for (const em of employee) {
  console.log(em);
}

// using for loop access specific array of object element
console.log(employee[0].name + employee[1].name);
//using loop
for (const e of employee) {
  console.log(e.name + " " + e.gender + " " + e.salary);
}

// can also change the value of
employee[0].name = "Avi 1229 avi";
for (const e of employee) {
  console.log(e.name + " " + e.gender + " " + e.salary);
}

// also can store array of object data in a variable
for (const v of employee) {
  const emp = v;
  const empInfo = emp.name + " " + emp.profession + " " + emp.salary;
  console.log(empInfo);
}

//18_6: [Optional] traverse in a 2D array

//creating array of object
const examMarks = [
  [1, 2, 3, 4, 90],
  [5, 6, 7, 8, 111],
  [9, 10, 11, 12, 999],
  [13, 14, 15, 16, 200],
];
//printing full array of object or 2D array
console.log(examMarks);
//printing  specific array of a object or 2D array
console.log(examMarks[2]); //printing 3rd array
console.log(examMarks[1]); //printing 2nd array
console.log(examMarks[0]); //printing 1st array
// access specific element of array of object or element of 2D element
console.log(examMarks[0][0]); //printing 1st element
console.log(examMarks[2][2]); //printing array of objects 3 array 3rd element
// also can change array of object element
examMarks[0][0] = 100;
console.log(examMarks);
// also can change array in array of object
examMarks[3][0] = 333;
examMarks[3][1] = 444;
examMarks[3][2] = 555;
examMarks[3][3] = 666;
examMarks[3][4] = 777;
console.log(examMarks);
// also can add element to specific array
examMarks[2][5] = 787;
examMarks[2][6] = 78789;
console.log(examMarks[2]);
//also can array to array of object
examMarks[4] = [121, 342, 653, 278, 909];
console.log(examMarks);

//pop an element
examMarks[4].pop(); // pop the index 4 last element
console.log(examMarks);

//also push an element
examMarks[4].push(1000123678);
console.log(examMarks);

//18_7: Copy array elements to another array

// way-1
const productPrice = [676, 90, 34, 56, 121, 45, 78, 34, 56, 102];
const cpp = [];
for (const y of productPrice) {
  cpp.push(y);
}
console.log(productPrice);
console.log(cpp);

cpp[1] = 777; // is not mutating original array
productPrice[0] = 111; //is not mutating the copy array

console.log(productPrice);
console.log(cpp);

// ~ ~ ~ way -2 ~ ~ ~

const array_ = [23, 56, 78, 67, 98, 101];
const newArray = Array.from(array_);
console.log(array_);
console.log(newArray);
newArray.push(90);
console.log(newArray); //printed copy array with push element
console.log(array_); //is not affecting original array
newArray[1] = 65656;
console.log(array_);
console.log(newArray);
array_[0] = 444;
console.log(array_); //only affecting original array
console.log(newArray); //is not affecting copy array

// ~ ~ ~ way -3 ~ ~ ~
const aviFav = [11, 32, 56, 90, 23, 67, 54];
const copyAvi = [].concat(aviFav);
console.log(aviFav);
console.log(copyAvi);
copyAvi.push(90);
console.log(copyAvi); //printed copy array with push element
console.log(aviFav); //is not affecting original array
copyAvi[1] = 65656; // change index-1 value
console.log(aviFav); //is not affecting original array
console.log(copyAvi); // only affecting the copy array

aviFav[0] = 444;
console.log(aviFav); //only affecting original array
console.log(copyAvi); //is not affecting copy array

// ~ ~ ~ way -4 ~ ~ ~
const avi1229 = [12, 67, 87, 45, 21, 45];
const aviToukir = [...avi1229];
console.log(avi1229);
console.log(aviToukir);
aviToukir.push(88888);
console.log(avi1229);
console.log(aviToukir);

