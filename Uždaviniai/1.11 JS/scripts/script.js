let darbuotojai = [
    {
vardas: "Jonas", 
pozicija: "vadybininkas",
atlyginimas: 1500
},
{
    vardas: "Marytė", 
    pozicija: "Buhalterė",
    atlyginimas: 1800
    },
    {
        vardas: "Petras", 
        pozicija: "direktorius",
        atlyginimas: 2000
        }
];
darbuotojai.map(function(darbuotojas) {
    darbuotojas.buvesAtlyginimas = darbuotojas.atlyginimas;
    let  atlyginimoKoeficientas = Math.floor((Math.random()*20+11));
darbuotojas.atlyginimas = darbuotojas.buvesAtlyginimas * atlyginimoKoeficientas / 100 + darbuotojas.atlyginimas;
darbuotojas.algosPalyginimas = function() {
    console.log(`Darbuotojo ${this.vardas} atlyginimas padidėjo nuo ${this.buvesAtlyginimas} iki ${this.atlyginimas} (${Math.round((this.atlyginimas/this.buvesAtlyginimas-1)*100)}%)`);
}
return darbuotojas;
});

darbuotojai[0].algosPalyginimas();
