let a = prompt("Nhập vào một dãy số bất kỳ");

if (Number.isInteger(+a)) {
  let b = a.split("").reverse().join("");
  console.log(b);
} else {
  console.log("Vui lòng nhập số");
}
