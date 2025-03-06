let a = prompt("Nhập dãy số");

if (Number.isInteger(+a)) {
  a.split("");
  let maxNumber = Math.max(...a);
  console.log(maxNumber);
} else {
  console.log("Nhập số hợp lệ!");
}
