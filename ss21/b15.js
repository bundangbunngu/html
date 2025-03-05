let amount = 3450000;

if (amount % 1000 !== 0) {
  console.log("Số tiền phải chia hết cho 1000");
} else {
  let denominations = [
    500000, 200000, 100000, 50000, 20000, 10000, 5000, 2000, 1000,
  ];
  let result = {};

  for (let i = 0; i < denominations.length; i++) {
    let note = denominations[i];
    if (amount >= note) {
      let count = Math.floor(amount / note);
      result[note] = count;
      amount -= count * note;
    }
  }

  for (let note in result) {
    console.log(`${note} - ${result[note]} tờ`);
  }
}
