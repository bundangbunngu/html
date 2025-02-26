let a = +prompt("nhap vao so thu nhat");

let b = +prompt("nhap vao so thu hai");

let c = Math.floor(Math.random() * (b - a)) + a;

document.write("so bat ki giua " + a + " va " + b + " la ", c);
