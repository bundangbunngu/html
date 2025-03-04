let num = parseInt(prompt("Nhập số n (số lượng số nguyên tố): "));

let primeNumbers = [];
let number = 2;

while (primeNumbers.length < num) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    primeNumbers.push(number);
  }
  number++;
}

console.log(`Danh sách ${num} số nguyên tố đầu tiên:`, primeNumbers.join(", "));
