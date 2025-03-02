let a = +prompt("nhap do dai cua canh thu nhat");
let b = +prompt("nhap do dai cua canh thu hai");
let c = +prompt("nhap do dai cua canh thu ba");
if (a + b > c && a + c > b && b + c > a) {
  if (a === b && b === c) {
    console.log("Tam giác đều");
  } else if (a === b || a === c || b === c) {
    console.log("Tam giác cân");
  } else if (
    a * a + b * b === c * c ||
    a * a + c * c === b * b ||
    b * b + c * c === a * a
  ) {
    console.log("Tam giác vuông");
  } else {
    console.log("Tam giác thường");
  }
} else {
  console.log("Không phải tam giác hợp lệ");
}
