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