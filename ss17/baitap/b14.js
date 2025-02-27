let banKinh = +prompt("Nhập vào bán kính");
let chieuCao = +prompt("Nhập vào chiều cao");

let sXungQuanh = 2 * Math.PI * banKinh * chieuCao;
let sToanPhan = 2 * Math.PI * banKinh * (banKinh + chieuCao);
let theTich = Math.PI * banKinh * banKinh * chieuCao;
let chuViDay = 2 * Math.PI * banKinh;

console.log("Diện tích xung quanh:", sXungQuanh);
console.log("Diện tích toàn phần:", sToanPhan);
console.log("Thể tích hình trụ: ", theTich);
console.log("Chu vi đáy:", chuViDay);
