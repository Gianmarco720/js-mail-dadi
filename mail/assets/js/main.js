// Esercizio 1. Mail

// Chiedo all’utente la sua email tramite prompt()
const userMail = prompt('Inserisci la tua e-mail:');

// creo una lista di mail con un array salvandola in una costante
const mailList = ['orabonagianmarco379@gmail.com', 'paolo.bonolis@gmail.com', 'mariorossi@gmail.com', 'luca@gmail.com', 'marcolorem@gmail.com'];

// controlla che sia nella lista di chi può accedere
let checker = false;
for (let i = 0; i < mailList.length; i++) {
    const thisMail = mailList[i];
    if (userMail === thisMail) {
        checker = true;
    }
}

if (checker) {
    document.getElementById('valid_mail').innerHTML = 'Mail corretta, accesso consentito';
} else {
    document.getElementById('invalid_mail').innerHTML = 'Mail sbagliata, accesso negato';
}
// stampa un messaggio appropriato sull’esito del controllo.