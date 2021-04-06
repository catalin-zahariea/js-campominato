// -------------------------------------------------
// Variables

var numeroBombe = 16;
var numeroMassimo = 100;
var punteggioMax = numeroMassimo - numeroBombe;
var userInput;
var flag = false;

// <><><><><><><>
// Array

var arrayBombe = [];
var arrayInput = [];

// <><><><><><><>
// Genero un array di bombe senza doppioni

while ( arrayBombe.length != numeroBombe ) {

    var bomba = Math.floor(Math.random() * 100) + 1;

    if (!arrayBombe.includes(bomba)) {
        arrayBombe.push(bomba);
    }
}

console.log(arrayBombe);

// <><><><><><><>
// Inserisco i numeri dell'utente

while ( !arrayBombe.includes(userInput) && arrayInput.length < punteggioMax ) {

    userInput = parseInt( prompt('Inserisca un numero') );

    if ( arrayBombe.includes(userInput) ) {
        flag = true;
    } else if ( !arrayInput.includes(userInput) ) {
        arrayInput.push(userInput);
    }
}

console.log(arrayInput);

alert(`I tuoi numeri sono: [${arrayInput}] e il tuo punteggio è ${arrayInput.length}`)

