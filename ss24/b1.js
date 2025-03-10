let choice;
let arr = [];
let sum;
let count;
do {
  choice = +prompt("nhap lua chon");

  switch (choice) {
    case 1:
      arr = [];
      let length = +prompt("Nhập số lượng phần tử của mảng:");
      if (length > 0 && Number.isInteger(+length))
        for (let i = 0; i < length; i++) {
          let number = +prompt(`Nhập phần tử thứ ${i + 1}:`);
          if (Number.isInteger(number)) {
            arr.push(number);
          }
        }
      break;

    case 2:
      console.log("Mảng hiện tại:", arr);
      break;

    case 3:
      if (arr.length === 0) {
        console.log("Mảng rỗng!");
      } else {
        arr.sort((a, b) => a - b);
        console.log("Số nhỏ nhất là:", arr[0]);
        console.log("Số lớn nhất là:", arr[arr.length - 1]);
      }
      break;
    case 4:
      sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      console.log("Tổng các phần tử:", sum);
      break;
    case 5:
      count = 0;
      let findNumber = +prompt("nhap so can tim");
      if (Number.isInteger(findNumber)) {
        for (let i = 0; i < arr.length; i++) {
          findNumber == arr[i] ? count++ : count;
        }
        console.log("so lan xuat hien count:", count);
      } else {
        console.log("vui long nhap so");
      }
      break;
    case 6:
      arr.sort((a, b) => a - b);
      console.log(arr);
      break;
    case 7:
      console.log("Thoát chương trình.");
      break;

    default:
      console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại.");
  }
} while (choice !== 7);
