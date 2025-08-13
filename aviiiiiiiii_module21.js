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
  return chairTotalWood+tableTotalWood+bedTotalWood;
}
console.log(woodQuantity(4,8,9));

function shoping(shirtQuantity, pantQuantity, shoeQuantity){
    const perShirtPrice=500;
    const perPantPrice=300;
    const perShoePrice=900;
    const totalShirtPrice=perShirtPrice*shirtQuantity;
    const totalPantPrice=perPantPrice*pantQuantity;
    const totalShoePrice=perShoePrice*shoeQuantity;
    const totalPrice=totalShirtPrice+totalPantPrice+totalShoePrice;
    return totalPrice;
}
console.log(shoping(7,90,3));