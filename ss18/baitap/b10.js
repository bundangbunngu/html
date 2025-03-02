let units = ["", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];

let tens = [
  "",
  "mười",
  "hai mươi",
  "ba mươi",
  "bốn mươi",
  "năm mươi",
  "sáu mươi",
  "bảy mươi",
  "tám mươi",
  "chín mươi",
];

let input = prompt("Nhập một số nguyên từ 0 đến 999:");
let number = parseInt(input);

if (
  isNaN(number) ||
  number < 0 ||
  number > 999 ||
  Math.floor(number) !== number
) {
  console.log("Số không hợp lệ. Vui lòng nhập số nguyên từ 0 đến 999.");
} else {
  if (number === 0) {
    console.log("Không");
  } else {
    let result = "";

    let hundred = Math.floor(number / 100);
    let remainder = number % 100;
    let ten = Math.floor(remainder / 10);
    let unit = remainder % 10;

    if (hundred > 0) {
      result = units[hundred] + " trăm";

      if (ten > 0) {
        result += " " + tens[ten];
        if (unit > 0) {
          result += " " + units[unit];
        }
      } else if (unit > 0) {
        result += " lẻ " + units[unit];
      }
    } else {
      if (ten > 0) {
        result = tens[ten];
        if (unit > 0) {
          result += " " + units[unit];
        }
      } else {
        result = units[unit];
      }
    }

    console.log(result);
  }
}
