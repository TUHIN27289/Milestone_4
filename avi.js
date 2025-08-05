console.log('hi avi , how are you?');
console.log('This is avi.js file');

//  array traversal using for ,while and for-of loop

//for loop
console.log('\n\n~ ~ Using for loop ~ ~ \n')
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew','kiwi', 'lemon'];
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//  while loop
console.log('\n\n~ ~ Using while loop ~ ~ \n')
let j = 0;
while(j<fruits.length){
    console.log(fruits[j]);
    j++;
}



// for-of loop
console.log('\n\n~ ~ Using for of loop ~ ~ \n')
for (const fruit of fruits){
    console.log(fruit);
}