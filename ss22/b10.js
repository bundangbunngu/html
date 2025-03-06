let arr = [];
let isRunning = true;

while (isRunning) {
  console.log(`
    MENU
    1. Nhập vào mảng
    2. Hiển thị mảng
    3. Thêm phần tử
    4. Sửa phần tử
    5. Xóa phần tử
    6. Thoát
  `);

  const choice = prompt("Lựa chọn của bạn (1-6):");

  if (choice === "1") {
    const input = prompt(
      "Nhập các phần tử của mảng, cách nhau bằng dấu phẩy (ví dụ: 1,2,3):"
    );
    arr = input.split(",").map(Number);
    console.log("Mảng đã được nhập thành công!");
  } else if (choice === "2") {
    console.log("Mảng hiện tại:", arr);
  } else if (choice === "3") {
    const element = Number(prompt("Nhập phần tử muốn thêm:"));
    arr.push(element);
    console.log(`Phần tử ${element} đã được thêm vào mảng.`);
  } else if (choice === "4") {
    const index = Number(
      prompt("Nhập vị trí phần tử muốn sửa (bắt đầu từ 0):")
    );
    if (index >= 0 && index < arr.length) {
      const newValue = Number(prompt("Nhập giá trị mới:"));
      arr[index] = newValue;
      console.log(`Phần tử tại vị trí ${index} đã được sửa thành ${newValue}.`);
    } else {
      console.log("Vị trí không hợp lệ!");
    }
  } else if (choice === "5") {
    const index = Number(
      prompt("Nhập vị trí phần tử muốn xóa (bắt đầu từ 0):")
    );
    if (index >= 0 && index < arr.length) {
      const deletedElement = arr.splice(index, 1);
      console.log(`Phần tử ${deletedElement} tại vị trí ${index} đã được xóa.`);
    } else {
      console.log("Vị trí không hợp lệ!");
    }
  } else if (choice === "6") {
    console.log("Thoát chương trình. Tạm biệt!");
    isRunning = false;
  } else {
    console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại!");
  }
}
