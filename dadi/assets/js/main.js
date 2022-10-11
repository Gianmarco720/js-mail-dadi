// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
const userDice = Number(Math.floor(Math.random() * 6) + 1);
const cpuDice = Number(Math.floor(Math.random() * 6) + 1);
console.log(userDice);
console.log(cpuDice);

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (userDice > cpuDice) {
    alert('Hai Vinto!')
    console.log('Hai Vinto!');
} else if (cpuDice > userDice) {
    alert('Hai Perso!')
    console.log('Hai Perso!');
} else {
    alert('Pareggio!')
    console.log('Pareggio!');
}