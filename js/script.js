//getRandomNumber per creare 5 numeri random 
// printRandomNumber per stampare i 5 numeri nell'html
// clearBody per nascondere i 5 numeri random 
// set timer per attivare clearBody che parte quando si attiva printRandomNumber 
// alla fine del timer userNumber chiede i 5 numeri 

var numeriRandom = [];
var numeriUtente = [];
var numeroUtente;

while (numeriRandom.length < 5) {
    var numeroCasuale = generaNumeriRandom(1, 9);
    console.log(numeriRandom)
    numeriRandom.push(numeroCasuale);
}
document.getElementById('numeri-random').innerHTML = numeriRandom

const randomNumberTimeOut = setTimeout(myRandomNumbers, 5000);

function myRandomNumbers() {
    document.getElementById('numeri-random').innerHTML = '';
    promptNumeriUtente()
}
function promptNumeriUtente(){
while (numeriUtente.length < 5) {
    numeroUtente = parseInt(prompt("Inserisci un numero da 0 a 9"));
    numeriUtente.push(numeroUtente);
}


console.log(numeriUtente)
}
  function generaNumeriRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }







