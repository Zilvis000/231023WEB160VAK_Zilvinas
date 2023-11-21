let divai = document.querySelectorAll("div");
let klases = [];
for (let divas of divai) {
let istrintiKlase = divas.classList[0];
klases.push(istrintiKlase);
divas.classList.remove(istrintiKlase);
}
//let klases = ["square","circle","triangle","rectangle","pentagon"];
for (let i = 0; i < divai.length; i++) {
    let divas = divai[i];
    let klase = klases[i]; 
    divas.classList.add(klase);
}
// for (let i = 0; i < divai.length; i++) {
//     let divas = divai[i];
//     let klase = klases[i]; 
//     divas.classList.toggle(klase);
//}