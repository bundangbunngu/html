let arr = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];

let a = +prompt("nhap vao 1 so nguyen");
let count = 0;
if (Number.isInteger(a)) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == a) {
      count++;
    }
  }
  if (count == 0) {
    console.log(`so ${a} ko ton tai`);
  } else {
    console.log(`so ${a} xuat hien ${count} lan `);
  }
} else {
  console.log("nhap so");
}
