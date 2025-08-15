function totalFine(fare) {
  // You have to write your code here
  if (typeof fare !== "number" || fare <= 0) {
    return "Invalid";
  } else {
    const finePrice = fare * 0.2;
    const serviceCharge = 30;
    const totalPrice = fare + finePrice + serviceCharge;
    return totalPrice;
  }
}
const res = totalFine(200);
console.log(res);
