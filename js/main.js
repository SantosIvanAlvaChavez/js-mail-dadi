/*******************
*Esercizio Mail
*******************/

//Dati utenti
var emailAccounts = ['elisabetta@yahoo.com', 'paolo@hotmail.com', 'luca@libero.com', 'roberta@gmail.com', 'andrea@rsn.com'];

var email = prompt('Prego, Inserisci il tuo account email');

var emailFound = false;

for ( var i = 0; i < emailAccounts.lenght; i++) {
    var item = emailAccounts[i];

    if (email == item) {
      emailFound = true;
    }
}

if (emailFound == true) {
  console.log('Account email riconosciuto, procedi con l\'accesso');
}
else {
  console.log('Account email non riconosciuto, impossibile l\'accesso!!!! ');
}



/************************
*Esercizio Gioco dei dadi
************************/

//Numeri random giocatore e pc
var giocatore = Math.floor(Math.random() * 6) + 1;
console.log(giocatore);

var pc = Math.floor(Math.random() * 6) + 1;
console.log(pc);

//Risultati
if (giocatore > pc) {
  console.log('Vince giocatore!');
}
else if (pc > giocatore) {
  console.log('Vince pc!');
}
else {
  console.log('Avete pareggiato!');
}
