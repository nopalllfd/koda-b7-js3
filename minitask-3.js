function totalCharge(uang) {
  totalPurchase = 1000;
  totalCharge = uang - totalPurchase;
  let totalPay = [];
  while (totalCharge > 0) {
    if (totalCharge >= 50000) {
      totalCharge = totalCharge - 50000;
      console.log(50000);
      totalPay.push(50000);
    } else if (totalCharge >= 10000) {
      totalCharge = totalCharge - 10000;
      console.log(10000);
      totalPay.push(10000);
    } else if (totalCharge >= 5000) {
      totalCharge = totalCharge - 5000;
      console.log(5000);
      totalPay.push(5000);
    } else if (totalCharge >= 2000) {
      totalCharge = totalCharge - 2000;
      console.log(2000);
      totalPay.push(2000);
    } else if (totalCharge >= 1000) {
      totalCharge = totalCharge - 1000;
      console.log(1000);
      totalPay.push(1000);
    }
  }
  console.log(totalPay);
// output
}

totalCharge(10000);
