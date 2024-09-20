let i = 1;

let input = document.getElementById("input");
let output = document.getElementById("output");

function Add() {
    let imageUrl = input.value;
    if (imageUrl) {
        output.src = imageUrl;
    } else {
        alert("Prosím, zadejte platný URL obrázku.");//přidá oznámení
    }
}
//function Add(){
//    output.innerHTML += "<br>" +i + ". " + input.value; // Zde si z původního ukolu přendáme <br> na začítek, aby se nám pak emoji nedávali pod
//    i++; }// Přidáme k hodnotě + 1, aby nám číslovalo pořadí