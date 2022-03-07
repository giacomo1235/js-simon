const arrRandom = [];
const eleOutput = document.getElementById('output');
for (let i = 0; i < 5; i++) {
    let randomNumber;
    do {
        randomNumber = getRandomBetween(1, 100)
    } while (arrRandom.includes(randomNumber))
    
    arrRandom.push(randomNumber)
}

console.log(arrRandom)

eleOutput.innerHTML = arrRandom;

setTimeout(() => {
    eleOutput.innerHTML = '';
}, 3000);

setTimeout (finishGame, 4000);

function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

function finishGame() {
    const arrUserNumbers = [];
    for(let i = 0; i< 5; i++) {
        let userNumbers;
        let message = 'numero'
        do {
            userNumbers = parseInt(prompt(message))
            if (arrUserNumbers.includes(userNumbers)) {
                message = 'diversi'
            }
        } while (arrUserNumbers.includes(userNumbers));

        arrUserNumbers.push(userNumbers);
        document.getElementById('usernum').innerHTML = 'numeri utente: ' + arrUserNumbers;
    }
    
    let guessedNumbers = 0;
    let arrGuessed = [];
    for (let i = 0; i < 5; i++) {
      if (arrRandom[i] == arrUserNumbers[i]) {
          guessedNumbers++;
          arrGuessed.push(arrUserNumbers[i]);
      }
    };
    
    eleOutput.innerHTML = 'numeri da acchiappare: ' + arrRandom;
    document.getElementById('score').innerHTML = 'punteggio: ' + guessedNumbers;
    document.getElementById('numeri').innerHTML = 'numeri acchiappati: ' + arrGuessed;

};