// Esercizio 1. Mail

// Chiedo all’utente la sua email tramite prompt()
const userMail = prompt('Inserisci la tua e-mail:');

// creo una lista di mail con un array salvandola in una costante
const mailList = ['orabonagianmarco379@gmail.com', 'paolo.bonolis@gmail.com', 'mariorossi@gmail.com', 'luca@gmail.com', 'marcolorem@gmail.com'];

// controlla che sia nella lista di chi può accedere
for (let i = 0; i < mailList.length; i++) {
    const checkList = mailList[i];

    if (userMail == checkList) {
        alert('Accesso consentito');
        break
    } else {
        alert('Non sei nella lista');
        break
    }
}
// stampa un messaggio appropriato sull’esito del controllo.