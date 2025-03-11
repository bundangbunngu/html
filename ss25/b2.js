function sum(a, b) {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    return a + b;
  }
  console.log("Dữ liệu ko hợp lệ");
}
console.log(sum(1, 5.6));
