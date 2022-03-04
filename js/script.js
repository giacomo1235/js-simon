//getRandomNumber per creare 5 numeri random 
// printRandomNumber per stampare i 5 numeri nell'html
// clearBody per nascondere i 5 numeri random 
// set timer per attivare clearBody che parte quando si attiva printRandomNumber 
// alla fine del timer userNumber chiede i 5 numeri 

var numeriRandom = [];
var numeriUtente = [];
var numeriSbagliati = [];
var numeroUtente;
var punteggio = 0;


while (numeriRandom.length < 5) {
    var numeroCasuale = generaNumeriRandom(1, 9);
    numeriRandom.push(numeroCasuale);
}
document.getElementById('numeri-random').innerHTML = numeriRandom

const randomNumberTimeOut = setTimeout(myRandomNumbers, 2000);

function myRandomNumbers() {
    document.getElementById('numeri-random').innerHTML = '';
    
}

const promptUtenteStart = setTimeout (promptNumeriUtente, 3000);

function promptNumeriUtente(){
while (numeriUtente.length < 5) {
    numeroUtente = parseInt(prompt("Inserisci un numero da 0 a 9"));
    numeriUtente.push(numeroUtente);
}
if (numeriRandom[1] == numeriUtente[1]) {
    punteggio ++
    
} else {
    numeriSbagliati.push(numeroUtente)
}
document.getElementById('numeri-random').innerHTML = numeriRandom
document.getElementById('numeri-utente').innerHTML = 'numeri-utente' + numeriUtente
document.getElementById('punteggio').innerHTML = 'punteggio' + punteggio
document.getElementById('messaggio').innerHTML = 'num errati' + numeriSbagliati.length

console.log(numeriUtente)
}
  function generaNumeriRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  








