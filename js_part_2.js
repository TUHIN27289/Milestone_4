// # js-problems-part2-practice-tasks

// ### Task -1:
// Find the lowest number in the array below.
// <br>
// `const heights2 = [167, 190, 120, 165, 137];`

// ---
const heights2 = [167, 190, 120, 165, 137];
console.log(Math.min(...heights2));

function lowestNumber(arr) {
  let min = arr[0];
  for (const i of arr) {
    if (min > i) {
      min = i;
    }
  }
  return min;
}
const res = lowestNumber(heights2);
console.log("Lowest Number : ", res);

// ### Task -2:
// Find the friend with the smallest name.
// <br>
// `const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];`

// ---
const heights3 = ["rahim", "robin", "rafi", "ron", "rashed"];
function smallestName(arr) {
  let min = arr[0];
  for (const i of arr) {
    if (min.length > i.length) {
      min = i;
    }
  }
  return min;
}
const res2 = smallestName(heights3);
console.log(res2);

// ### Task-3:
// Your task is to calculate the `total budget` required to buy electronics:

//         laptop = 35000 tk
//         tablet = 15000 tk
//         mobile = 20000 tk

// Write a JavaScript function named `calculateElectronicsBudget` that takes in the number of `laptop, tablets, and mobile` and returns the `total money required`.
// ---

function totalBudget(laptopQuantity, tabletQuantity, mobileQuantity) {
  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;
  const totalMoney =
    laptopQuantity * laptopPrice +
    tabletQuantity * tabletPrice +
    mobileQuantity * mobilePrice;
  return totalMoney;
}
const res3 = totalBudget(5, 8, 23);
console.log("Total Money : ", res3);

// ### Task-4:

// You are `given an array of phone objects`, each containing information about the `model, brand, and price`. Your task is to write a JavaScript function named `findAveragePhonePrice` that takes this `array as input` and returns the `average price of phone`.

// **Input**

// <br>

//         const phones = [
//             { model: "PhoneA", brand: "Iphone", price: 95000 },
//             { model: "PhoneB", brand: "Samsung", price: 40000 },
//             { model: "PhoneC", brand: "Oppo", price: 26000 },
//             { model: "PhoneD", brand: "Nokia", price: 35000 },
//             { model: "PhoneE", brand: "Iphone", price: 105000 },
//             { model: "PhoneF", brand: "HTC", price: 48000 },
//         ];
// ---

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(arr) {
  let sum = 0;
  for (const i of arr) {
    sum = sum + i.price;
  }
  return (sum / arr.length).toFixed(2);
}
const res4 = findAveragePhonePrice(phones);
console.log("phone average price", res4);

// ### Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.
// ```
//  const employees = [
//             { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//             { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//             { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//             { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
//         ];
// ```

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function calculatedSalary(arr){
    let sum=0;
    for(const i of arr){
        let totalSalary=(i.starting)+(i.experience*i.increment);
        sum=sum+totalSalary;
    }
    return sum;
}
const res5=calculatedSalary(employees);
console.log('Total salary have to pay by company : ',res5);
