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
