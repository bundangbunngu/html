let a = +prompt("nhap so a");
let b = +prompt("nhap so b");

let c = prompt("nhap phep tinh");

if (c == "+") {
  let d = a + b;
  alert(d);
} else if (c == "-") {
  let d = a - b;
  alert(d);
} else if (c == "*") {
  let d = a * b;
  alert(d);
} else if (c == "/") {
  if (b != 0) {
    let d = a / b;
    alert(d);
  } else {
    alert("khong the chia cho 0");
  }
} else alert("nhap phep tinh +-*/");
