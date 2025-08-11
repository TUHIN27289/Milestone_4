//20-2 Unit Convert Inch to Feet, miles to kilometre
function inchtoFeet(inch) {
  //const feet=(inch/12).toFixed(0);
  const feet = parseInt(inch / 12);
  const ins = inch % 12;
  return console.log("feet : ", feet, " inch : ", ins);
}
inchtoFeet(75);

//miles to km
function milestoKm(m) {
  const mil = m * 1.60934;
  return mil;
}
console.log(milestoKm(2));

//20-3 Check whether a year is a Leap Year or not
function isLeap(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isLeap(2001));
console.log(isLeap(1970));
console.log(isLeap(2008));

// 20-4 Calculate the average of the odd numbers in an array

function oddarrayAvg(arr) {
  let s = 0,
    p = 0;
  let av;
  for (const a of arr) {
    if (a % 2 !== 0) {
      s = s + a;
      p++;
    }
  }
  if(p===0){
    return 0;
  }
  else{
    return s/p;
  }
//   av = s / p;
//   return av;
}
console.log(oddarrayAvg([7, 9, 3, 5, 2, 8, 9, 3, 56]));
console.log(oddarrayAvg([2, 4, 6]));  


// 20-4 Calculate the average of the even numbers in an array

function evenarrayAvg(arr) {
  let s = 0,
    p = 0;
  let av;
  for (const a of arr) {
    if (a % 2 === 0) {
      s = s + a;
      p++;
    }
  }
  if(p===0){
    return 0;
  }
  else{
    return s/p;
  }
//   av = s / p;
//   return av;
}
console.log(evenarrayAvg([7, 9, 3, 5, 2, 8, 9, 3, 56]));
console.log(evenarrayAvg([2, 4, 6]));  

//20-5 Remove duplicate items from an array
function removeDuplicate(arr){
    const unique=[];
    for(const e of arr){
        if(unique.includes(e)===false){
            unique.push(e);
        }
    }
    return unique;
}
console.log(removeDuplicate(['avi','toukir','1229','avitt','avi','at','toukir']));
console.log(removeDuplicate([3,6,90,23,45,12,5,5,3,5,3,2,2,4,2,3,4]));
