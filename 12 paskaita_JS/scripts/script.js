let skaicius = 0;
let herbas = 0;

for (let x = 0; x < 10; x++) {
  let random = Math.random()

console.log(random);

if (random < 0.5) {
skaicius++;  
} else {
  herbas++;
}
}

console.log(`Iskrito skaicius: ${skaicius}`);
console.log(`Iskrito herbas: ${herbas}`);

// WHILE

//let metimai = 0;
//let iskritoSkaicius = false;
//while (!iskritoskaicius) {
  //metimai++;

  //let random = Math.random();
  //if (random < 0.5) {
    //iskritoskaicius = true;
    //iskritoskaicius = Math.random() < 0.5
  //}

//console.log(`ismetem moneta ${metimai} kartu, kol iskrito skaicius`);

let vienoseileszvaigzdutes = "";
for (let a = 0; a < 5; a++) {
  vienoseileszvaigzdutes += "*";
  console.log(vienoseileszvaigzdutes);
}

for (let a = 4; a >= 0; a--) {
  vienoseileszvaigzdutes = "";
  for (let b = 0; b <= a; b++) {
vienoseileszvaigzdutes += "*";
  }
  console.log(vienoseileszvaigzdutes);
}

let masyvas = ["raudona", "zalia", "melyna"]
for(let x = 0; x < masyvas.length; x++) {
  console.log (masyvas[x]);
}

masyvas.forEach(function (value, index, array) {
  console.log(value);
  console.log(index);
  console.log(array);
});
for (let spalva of masyvas) {
  console.log(spalva)
}

//Funkcijos

function pasisveikinimas(vardas, oras = "debesuota") {
  console.log(`Sveiki ${vardas}!`);
  console.log(`Siandien yra ${oras}.`);
}

// pasisveikinimas("Žilvinas");

let k1 = "Jonas";
let k2 = "sauleta";
pasisveikinimas(k1, k2);

function suma(a, b) {
  return a + b;
}

let k3 = suma(15, 87);
console.log(k3);

//prideti menesio ir dienos patikrinma
function arPilnametis(gimimoData) {
  let dabartiniaiMetai = new Date() .getFullYear();

if(dabartiniaiMetai - gimimoData < 20) {
  return false;
}

  return true;
}

let manoAmzius = prompt("Iveskite savo gimimo data");

if (arPilnametis(2004)) {
  console.log("Jus esate pilnametis");
} else {
  console.log ("Jus esate nepilnametis")
}