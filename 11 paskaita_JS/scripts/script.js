//let pinigai = prompt("Iveskite pinigu skaiciu:");
let pinigai = 2000;

if (pinigai > 3000) {
  console.log("Jums uztenka atostogoms Maljorkoje.");
} else if (pinigai > 1500) {
  console.log("Jums uztenka atostogoms Palangoje.");
} else if (pinigai > 800) {
  console.log("Jums uztenka atostogoms Turkijoje");
} else {
  console.log("Jums neuztenka atostogoms.");
}

console.log("toliau rasome JS.");

switch (Number(pinigai)) {
  case 3000:
    console.log("Jus turite 3000 pinigu");
    console.log("Jus esate turtingas!");
    break;
  case 2000:
    console.log("Jus turite 2000 pinigu");
    break;
  default:
    console.log("Jusu pinigu suma yra nei 3000, nei 2000");
}

let diena = "sekmadienis";

switch (diena === "penktadienis") {
  case true:
    console.log("Su savaitgaliu");
    break;
  default:
    console.log("ne penktadienis");
}

let maistas = "obuolys";

if (maistas === "bananas" || maistas === "ubuolys") {
  console.log("Vaisius");
}

let balas = prompt("Ivesikte ivertinima");

switch (Number(balas)) {
  case 3:
    console.log("Laimejote aukso medali");
    break;
  case 2:
    console.log("Laimejote sidabro medali");
    break;
  case 1:
    console.log("Laimejote bronzos medali");
    break;
  default:
    console.log("Bandykite dar karta");
}

// ciklai

// FOR ciklas

for (let x = 0; x < 10; x++) {

    console.log(x);
}