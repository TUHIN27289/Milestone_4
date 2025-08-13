// # js-problems-part1-practice-tasks

// ### Task-1: 
// Write a function to convert temperature from Celsius to Fahrenheit.

// ---
function CelsiustoFahrenheit(cel){
    const Far=(cel*1.8)+32;
    return Far;
}
console.log(CelsiustoFahrenheit(77));


// ### Task-2: 
// You are given an array of numbers. Count how many times the a number is repeated in the array. 

// sample-input: 
// numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

// <br/>

// sample-input: 

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

const number=[4,6,12,45,32,56,78,90,2,2,3,4,1,21,12,2,3,32,45,4,56,4]
let c=0;
function counterrr(arr, target){
    for(const i of arr){
        if(i===target){
            c++;
        }
    }
    return c;
}

console.log(counterrr([4,6,12,45,32,56,78,90,2,2,3,4,1,21,12,2,3,32,45,4,56,4],100));







// ----
// ### Task-3: 
// Write a function to count the number of vowels in a string.
// ---

const name='avihowareyouihopeyouarewellimissucanyoumeetimissyourbeautifuleyes';

function countVowel(a){
    let cv=0;
    for(const e of a){
        if(e==='a'||e==='e'||e==='i'||e==='o'||e==='u'){
            cv++;
        }
    }
    return cv;
}
console.log(countVowel('avihowareyouihopeyouarewellimissucanyoumeetimissyourbeautifuleyes'))

function countVowel_(str) {
    let count = 0;
    for (const char of str.toLowerCase()) {
        if ('aeiou'.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowel_('avihowareyouihopeyouarewellimissucanyoumeetimissyourbeautifuleyes'))

// ### Task-4: 
// Write a function to find the longest word in a given string.

// sample-input: 
// I am learning Programming to become a programmer

// sample-output: Programming
// ----

function longestWord(arrr){
    const w=arrr.split(' ');
    let longest=' ';
    for(const wr of w){
        if(wr.length>longest.length){
            longest=wr;
        }
    }
    return longest;
}
console.log(longestWord('I am learning Programming to become a programmer'))
console.log(longestWord('Aviiiiiiiiiiiiiiiiiiiii i miss youuuuuuuuuuu'))

// ### Task-5: 
// Generate a random number between 10 to 20.
function randomNumber(){
    return Math.floor(Math.random()*(20-10+1))+10;
}
console.log(randomNumber())