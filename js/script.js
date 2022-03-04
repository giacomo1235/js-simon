//getRandomNumber per creare 5 numeri random 
// printRandomNumber per stampare i 5 numeri nell'html
// clearBody per nascondere i 5 numeri random 
// set timer per attivare clearBody che parte quando si attiva printRandomNumber 
// alla fine del timer userNumber chiede i 5 numeri 

var numeriRandom = [];

while (numeriRandom.length < 5) {
    var numeroCasuale = generaNumeriRandom(1, 9);
    console.log(numeriRandom)
    numeriRandom.push(numeroCasuale);
}
document.getElementById('numeri-random').innerHTML = numeriRandom

  function generaNumeriRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


