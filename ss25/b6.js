function isPalindrome() {
  let text = prompt("Nhập chuỗi ký tự:");
  let flag = 1;

  for (let i = 0; i < text.length / 2; i++) {
    if (text[i] !== text[text.length - 1 - i]) {
      flag = 0;
      break; 
    }
  }

  if (flag) {
    console.log("Đây là chuỗi đối xứng");
  } else {
    console.log("Không phải chuỗi đối xứng");
  }
}

isPalindrome();
