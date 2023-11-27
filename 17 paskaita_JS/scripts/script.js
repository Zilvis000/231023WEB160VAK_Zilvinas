let image = document.getElementById("besikeiciantis-paveikslelis");
//let button = document.getElementById("paveikslelio-mygtukas");

image.addEventListener("click", function(){
  let randomId = Math.floor(Math.random() *1000);
  //console.log(randomId);
image.setAttribute("src", `https://picsum.photos/id/${randomId}/500/300`);
//console.log("paveikslelis pasikeite")
});


let myForm = document.getElementById("my-form");
let greetingElement = document.getElementById("greetings");

myForm.addEventListener("submit", function(event) {

event.preventDefault();

console.log(event);
console.log("Pateikta forma");

let firstNameValue = myForm.elements.firstName.value;

console.log(firstNameValue);

greetingElement.textContent = `Sveiki sugrįžę ${firstNameValue}!`;
});

let response = fetch("https://icanhazdadjoke.com/").then(function(){


});

console.log(response);



