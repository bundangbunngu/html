// let text = prompt("Moi ban nhap gia tri");
// console.log("gia tri nguoi dung vua nhap", text);

/*
    Viết chương trình cho người dùng nhập vào 2 số bất kì 
    tính tổng 2 số đố
    1. khi cho người dùng nhập phải dùng prompt
    2. tạo biến để lấy giá trị người dùng nhập
    3. tạo biến lưu kết quả tổng 2 số
*/

// let numberA = Number(prompt("moi ban nhap so thu nhat"));
// let numberB = +prompt("moi ban nhap so thu hai");

// let sum = numberA + numberB;
// console.log("gia tri cua 2 so vua nhap la", sum);

// Viết chương trình cho người dùng nhập vào điểm số 3 môn
// toán lý hóa, tính điểm tbinh

let toan = Number(prompt("moi ban nhap diem toan"));
let ly = +prompt("moi ban nhap diem ly");
let hoa = +prompt("moi ban nhap diem hoa");                                               
let avr = (toan + ly + hoa) / 3;
console.log("diem trung binh cua ban la: ", avr);
