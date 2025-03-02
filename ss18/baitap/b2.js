let a = +prompt("nhap diem mon toan");
let b = +prompt("nhap diem mon van");
let c = +prompt("nhap diem mon anh");

let avr = (a + b + c) / 3;

if (avr >= 8.0) {
  console.log("Gioi", avr);
} else if (avr >= 6.5) {
  console.log("Kha", avr);
} else if (avr >= 5.0) {
  console.log("Trung binh", avr);
} else {
  console.log("Yeu", avr);
}
