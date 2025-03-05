let n = +prompt("Nhập vào số nguyên n:");
if (!isNaN(n) && n > 0) {
  let count = 0;
  let num = 2;
  let result = "";

  while (count < n) {
    let isPrime = true;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      if (count > 0) {
        result += ", ";
      }
      result += num;
      count++;
    }
    num++;
  }

  console.log("Các số nguyên tố đầu tiên: " + result);
} else {
  console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
}
