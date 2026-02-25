function totalCharge(uang) {
  totalPurchase = 1000;
  totalCharge = uang - totalPurchase;
  console.log(`total belanja ${totalPurchase}, uang bayar ${uang}, total kembalian ${totalCharge}`);
  while (totalCharge > 0) {
    let noms = [50000, 10000, 5000, 2000, 1000];
    let count = 0;
    console.log('Detail kembalian');
    for (let i = 0; i < noms.length; i++) {
      if (totalCharge >= noms[i]) {
        totalCharge - noms[i];
        count++;
      }
      if (count > 0) {
        console.log(`uang ${noms[i]} berjumlah ${count}`);
      }
    }
    break;
  }
}
totalCharge(15000);
