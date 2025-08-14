//21-1 Can you find out who will get the Strawberry?
//max of 2
function maxTwo(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(maxTwo(45, 90));

//max of three

function maxofTree(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}
console.log(maxofTree(7, 89, 2));

// max of multiple number
function maxNumber(arr) {
  return Math.max(...arr);
}
console.log(maxNumber([7, 90, 34, 21, 2, 12, 56, 89, 555, 34]));

//21-2 Who is the tallest? Find the max number in an array
function findTallest(arr) {
  let max = arr[0];
  for (let i of arr) {
    if (i > max) {
      max = i;
    }
  }
  return max;
}
console.log(findTallest([9, 8, 90, 5, 67, 54]));

function findSmallest(arr) {
  let min = arr[0];
  for (let i of arr) {
    if (i < min) {
      min = i;
    }
  }
  return min;
}
console.log(findSmallest([9, 8, 90, 5, 67, 54]));

//21-3 Use add and multiplication to calculate wood requirements
function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const chairTotalWood = perChairWood * chairQuantity;
  const tableTotalWood = perTableWood * tableQuantity;
  const bedTotalWood = perBedWood * bedQuantity;
  return chairTotalWood + tableTotalWood + bedTotalWood;
}
console.log(woodQuantity(4, 8, 9));

function shoping(shirtQuantity, pantQuantity, shoeQuantity) {
  const perShirtPrice = 500;
  const perPantPrice = 300;
  const perShoePrice = 900;
  const totalShirtPrice = perShirtPrice * shirtQuantity;
  const totalPantPrice = perPantPrice * pantQuantity;
  const totalShoePrice = perShoePrice * shoeQuantity;
  const totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;
  return totalPrice;
}
console.log(shoping(7, 90, 3));

//21-4 Find the cheapest phone from an array of phone objects
const phones = [
  {
    name: "iphone",
    salary: 100000,
    ram: "8gb",
    color: "black",
    camera: "12mp",
  },
  { name: "xiaomi", salary: 25000, ram: "8gb", color: "black", camera: "12mp" },
  { name: "samsung", salary: 6000, ram: "8gb", color: "black", camera: "12mp" },
  { name: "HTC", salary: 100000, ram: "8gb", color: "black", camera: "12mp" },
  { name: "OPPO", salary: 50000, ram: "8gb", color: "black", camera: "12mp" },
  { name: "Walton", salary: 40000, ram: "8gb", color: "black", camera: "12mp" },
];
function findCheapestphone(phone) {
  let mob = phone[0];
  for (const i of phone) {
    if (i.salary < mob.salary) {
      mob = i;
    }
  }
  return mob;
}
console.log("cheapest phone ", findCheapestphone(phones));

function findhighphone(phone) {
  let mob = phone[0];
  for (const i of phone) {
    if (i.salary > mob.salary) {
      mob = i;
    }
  }
  return mob;
}
console.log("high price phone ", findhighphone(phones));

//21-5 Calculate the total cost of the products in a shopping cart

const products = [
  { name: "shirt", price: 700, quantity: 5 },
  { name: "pant", price: 1200, quantity: 7 },
  { name: "shoe", price: 2000, quantity: 2 },
  { name: "punjabi", price: 3000, quantity: 6 },
];

function productsCart(products) {
  let total = 0;
  for (const p of products) {
    total = total + p.price * p.quantity;
  }
  return total;
}
const pr = productsCart(products);
console.log("Total price : ", pr);

const products_ = [
  { name: "shirt", price: 700 },
  { name: "pant", price: 1200 },
  { name: "shoe", price: 2000 },
  { name: "punjabi", price: 3000 },
];

const quanties = [4, 7, 11, 5];

function productsCart_(products, quanties) {
  let total = 0;
  for (const [p, pro] of products.entries()) {
    total = total + pro.price * quanties[p];
  }
  return total;
}
console.log("Total Price : ", productsCart_(products_, quanties));

// discount price calculation
// 100 -->100
// 101-- 200 -->90
// >200 --->70

function discount(avi) {
  const price = 500;
  if (0 < avi <= 100) {
    const to = price * avi;
    return to;
  } else if (100 < avi <= 200) {
    const to = price * avi * 0.9;
    return to;
  } else if (avi > 200) {
    const to = price * avi * 0.7;
    return to;
  }
}
console.log("discount amount : ", discount(100));
console.log("discount amount : ", discount(190));
console.log("discount amount : ", discount(300));

//21-6 (advanced) Multi-layer discount price calculation
// first 100 price 100
// second 200 price 90
// greater than 200 price 70

function layerDiscount(quantity) {
  const first100Price = 100;
  const second200Price = 90;
  const above200Price = 70;
  if (quantity >= 100) {
    const result = first100Price * quantity;
    return result;
  } else if (quantity <= 200) {
    const combine100price = 100 * 100;
    const remquantityprice = (quantity - 100) * second200Price;
    return combine100price + remquantityprice;
  } else {
    const combine100price = 100 * first100Price;
    const combine200price = 100 * second200Price;
    const rem = (quantity - 200) * above200Price;
    return combine100price + combine200price + rem;
  }
}
console.log("Layer discount price", layerDiscount(90));
console.log("Layer discount price", layerDiscount(170));
console.log("Layer discount price", layerDiscount(290));

//21-7 Simple calculator to call function inside a function
function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiple(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function reminder(a,b){
    return a%b;
}
function calculator(a,b,operation){
    if(operation==='add'){
        return add(a,b);
    }
    else if(operation==='subtract'){
        return subtract(a,b);
    }
    else if(operation==='multiple'){
        return multiple(a,b);
    }
    else if(operation==='divide'){
        return divide(a,b);
    }
    else if(operation==='reminder'){
        return reminder(a,b);
    }
}

const res=calculator(5,7,'reminder');
console.log(res)