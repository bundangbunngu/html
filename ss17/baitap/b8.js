let a = prompt("Nhập ngày");
let b = prompt("Nhập ngày");

let c = Math.abs(new Date(a) - new Date(b)) / (1000 * 60 * 60 * 24);
console.log(c);
c