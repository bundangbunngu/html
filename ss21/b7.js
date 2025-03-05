let tienGoc = +prompt("Nhập số tiền ban đầu: ");
let laiSuatThang = +prompt("Nhập lãi suất tháng (%): ");
let soThang = +prompt("Nhập số tháng gửi: ");

let tongTien = tienGoc;
for (let i = 0; i < soThang; i++) {
  tongTien += tongTien * (laiSuatThang / 100);
}

let tienLai = tongTien - tienGoc;

console.log("Tiền lãi: " + tienLai.toFixed(3));
console.log("Tổng tiền nhận được: " + tongTien.toFixed(3));
