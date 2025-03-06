let numbers = [2, 5, 4, 7, 8, 1, 6];
let a = +prompt("nhap vao 1 so bat ki");
let flag = 0;
if (Number.isInteger(a)) {
  for (let i = 0; i < numbers.length; i++) {
    a == numbers[i] ? flag++ : flag;
  }
  flag != 0 ? console.log("Bingo") : console.log("chuc ban may man lan sau");
} else {
  console.log("nhap vao so ");
}
