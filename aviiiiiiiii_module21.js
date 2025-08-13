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
