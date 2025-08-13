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

//21-4 Find the cheapest phone from an array of phone objects
const phones=[
    {name:'iphone', salary: 100000, ram:'8gb', color:'black', camera:'12mp'},
     {name:'xiaomi', salary: 25000, ram:'8gb', color:'black', camera:'12mp'},
      {name:'samsung', salary: 6000, ram:'8gb', color:'black', camera:'12mp'},
       {name:'HTC', salary: 100000, ram:'8gb', color:'black', camera:'12mp'},
        {name:'OPPO', salary: 50000, ram:'8gb', color:'black', camera:'12mp'},
         {name:'Walton', salary: 40000, ram:'8gb', color:'black', camera:'12mp'}
]
function findCheapestphone(phone){
    let mob=phone[0];
    for(const i of phone){
        if(i.salary<mob.salary){
            mob=i;
        }
    }
    return mob;
}
console.log('cheapest phone ',findCheapestphone(phones))

function findhighphone(phone){
    let mob=phone[0];
    for(const i of phone){
        if(i.salary>mob.salary){
            mob=i;
        }
    }
    return mob;
}
console.log('cheapest phone ',findhighphone(phones))