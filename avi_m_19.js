//19-3 Function parameter, handle multiple parameters
function addAll(n, n1, n2, n3, n4) {
  console.log(n, n1, n2, n3, n4);
  const sum = n + n1 + n2 + n3 + n4;
  console.log(sum);
}
addAll(2, 5, 6, 8, 9);

console.log("\n\n");
function multi(n, n1, n2, n3, n4) {
  console.log(n, n1, n2, n3, n4);
  const sum = n * n1 * n2 * n3 * n4;
  console.log(sum);
}
multi(2, 5, 6, 8, 9);

console.log("\n\n");
function subTraction(a, b) {
  console.log(a, b);
  const sub = a - b;
  console.log(sub);
}
subTraction(10, 5);

console.log("\n\n");
function division(a, b) {
  console.log(a, b);
  const div = a / b;
  console.log(div);
}
division(8, 4);

console.log("\n\n");
function modulus(a, b) {
  console.log(a, b);
  const mod = a % b;
  console.log(mod);
}
modulus(10, 3);

function sqare(num) {
  console.log(num);
  const sq = num * num;
  console.log(sq);
}
sqare(5);

//19-4 How Function works and argument vs parameters
function areaTriangle(height, width) {
  console.log(height, width);
  const area = 0.5 * height * width;
  console.log("area of ", height, " and ", width, "is : ", area);
}
areaTriangle(5, 6);
// we can also pass argument or  variable
const height = 10;
const width = 20;
areaTriangle(height, width);



console.log('\n\n')
//19-5 Function return and set return value to a variable
function doubleSalary(num) {
  console.log(num);
  const double = num * 2;
  return double; //Function return
}
doubleSalary(500000); // here the double is not printing

function halfSalary(sal){
    console.log(sal);
    const salary=.5*sal;
    return salary; //Function return
}
const salary=halfSalary(10000000); //set return value to a variable
console.log(salary);

// conditional example
function isEven(num){
    if(num%2===0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(10));
console.log(isEven(13));

function isOdd(num){
    if(num%2===1){
        return true;
    }
    else{
        return false;
    }
}
console.log(isOdd(7));
console.log(isOdd(10));

// 19-7 Different types of parameters for a function
function mFunction(par){
    //const si=par.length;
    console.log(par,par.length);
    if(par.length%2===0){
        return true;
    }
    else{
        return false;
    }
}

const a= mFunction('tuhin');
console.log(a);
const a1= mFunction('asma');
console.log(a1);

console.log('.................\n\n')
//function double or triple
 function doubleorTriple(num, doDouble){
    if(doDouble===true){
        const dnum=num*2;
        return dnum;
    }
    else{
        const tnum=num*3;
        return tnum;
    }
 }
 console.log(doubleorTriple(6,true));
 console.log(doubleorTriple(6,false));

 console.log('.................\n\n');

 /// can also receive an array through an argument
 function resArray(arr){
    const len=arr.length;
    return len;
 }
let aviY=resArray([4,7,34,90,12,101])
console.log(aviY)


console.log('.................\n\n');

 /// can also receive an object through an argument

 function objectArgument(you){
    const age=you.age;
    return age;


 }
 let person ={age:25};
  let h=objectArgument(person);
  console.log(h);

  //19-8 Sum of all numbers in an array using function
  function arrSum(num){
    let sum=0;
    for(const n of num){
        sum=sum+n;
    }
    return sum;
  }
  //const arr=[2, 4, 6, 8, 10];
  console.log(arrSum([5,8,90,23,12,54]))

  //19-9 Return all the even numbers of an array
