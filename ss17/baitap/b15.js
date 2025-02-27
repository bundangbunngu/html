let banKinh = +prompt("Nhập vào bán kính của hình cầu");
let theTich = (4 / 3) * Math.PI * Math.pow(banKinh, 3);
let dienTich = 4 * Math.PI * Math.pow(banKinh, 2);
let chuVi = 2 * Math.PI * banKinh;

console.log("Thể tích hình cầu: ", theTich.toFixed(2));
console.log("Diện tích bề mặt hình cầu:", dienTich.toFixed(2));
console.log("Chu vi lớn nhất của hình cầu:", chuVi.toFixed(2));
