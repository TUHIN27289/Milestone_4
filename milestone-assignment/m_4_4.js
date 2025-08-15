function isSame(arr1, arr2) {
  // You have to write your code here
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  } else {
    if (arr1.length !== arr2.length) {
      return false;
    } else {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    }
  }
}

// const res = [1, 2, 3];
// const res1 = [1, 2, 3];
//  console.log(isSame(res, res1));

console.log(isSame([1, undefined, 3], [1, null, 3]));
// console.log(isSame{data: [2 , 5 , 6] } , [2 , 5 , 6])}
