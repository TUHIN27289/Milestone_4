// # Simple function Related Practice Tasks

// ### Task-1  
// Take four parameters. Multiply the four numbers and then return the result 

// ---
function multiply(n, n1, n2, n3){
    const result=n*n1*n2*n3;
    return result;
}
console.log(multiply(5,3,2,8));


// ### Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

// ---

function oddEven(num){
    if(num%2===0){
        return num/2;
    }
    else{
        return num*2;
    }
}
console.log(oddEven(5));
console.log(oddEven(4));


// ### Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

// ---
function make_avg(arr){
    let sum=0;
    for(const i of arr){
        sum=sum+i;
    }
    return sum/arr.length;
}
console.log(make_avg([2,5,8,90,2,67]));


// ### Task-4  
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

// ---
function count_zero(arr){
    let c=0;
    for(let i of arr){
        if(i==='0'){
            c=c+1;
        }
    }
    return c;  
}
console.log(count_zero('1010101000000101001010000'));




// ### Task-5 
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`
function odd_even(num){
    if(num%2===0){
        return 'Even';
    }
    else{
        return 'Odd';
    }
}
console.log(odd_even(7));
console.log(odd_even(8));