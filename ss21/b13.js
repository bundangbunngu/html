for (let i = 10; i > 0; i--) {
  let line = "";
  for (let j = 0; j < i; j++) {
    line += "*";
  }
  document.write(line + "<br>");
}
for (let i = 1; i <= 10; i++) {
  let line = "";
  for (let j = 0; j < i; j++) {
    line += "*";
  }
  document.write(line + "<br>");
}
for (let i = 1; i <= 10; i++) {
  let line = "";
  for (let j = 0; j < 10 - i; j++) {
    line += "&nbsp;";
  }
  for (let k = 0; k < i; k++) {
    line += "*";
  }
  document.write(line + "<br>");
}
for (let i = 10; i > 0; i--) {
  let line = "";
  for (let j = 0; j < 10 - i; j++) {
    line += "&nbsp;";
  }
  for (let k = 0; k < i; k++) {
    line += "*";
  }
  document.write(line + "<br>");
}
