// OBJEKTAS

// Sukurimas
let knyga = {
  // Ypatybės
  pavadinimas: "Žiedų Valdovas",
  autorius: "J. R. R. Tolkien",
  // Metodas
  pristatymas: function() {
      console.log(`${this.autorius} knyga - ${this.pavadinimas}.`);
  }
};

// Ypatybių naudojimas
console.log(knyga.pavadinimas);
console.log(knyga["autorius"]);

// Metodo iškvietimas
knyga.pristatymas();

// Pridėti naują ypatybę metai
knyga.metai = 1987;

// Pakeisti ypatybės pavadinimas reikšmę
knyga.pavadinimas = "Hobitas";

delete knyga.autorius;

console.log(knyga);

if ("autorius" in knyga) {

}

function Filmas (pavadinimas, rezisierius) {
  this.pavadinimas = pvadinimas;
  this. rezisierius = rezisierius;
  this.pristatymas = function() {
    console.log(`${this.rezisierius} filmas - ${this.pavadinimas}`);
  }
}