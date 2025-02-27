let a = 4;
let b = 9;
let c = 0;

let delta = b * b - 4 * a * c;

let x1 = -b + (Math.sqrt(delta) / 2) * a;
let x2 = -b - (Math.sqrt(delta) / 2) * a;

console.log(x1, x2);
