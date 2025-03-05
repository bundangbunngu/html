for (let num = 100; num < 1000; num++) {
  let d1 = Math.floor(num / 100);
  let d2 = Math.floor((num % 100) / 10);
  let d3 = num % 10;

  let sum = d1 * d1 * d1 + d2 * d2 * d2 + d3 * d3 * d3;

  if (sum === num) {
    console.log(num);
  }
}
