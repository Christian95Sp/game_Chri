const container = document.getElementById("container");
const link = document.createElement("a");

data.forEach((object) => {
  link.href = object.gameUrl;
  link.innerText = object.name;
  container.appendChild(link);
})


/* CARTA SASSO FORBICE NORMALE
--------------TABELLA------------------------
--------||-VITTORIA-||-SCONFITTA-||-PAREGGIO-----------
Forbici || Carta    || Sasso     || Forbici
Carta   || Sasso    || Forbici   || Carta
Sasso   || Forbici  || Carta     || Sasso
 */

const risultato = document.getElementById("risultato");

const tentativi = 3;
let giocatore;
let computer;
let puntiComputer = 0;
let puntiGiocatore = 0;

const oggetti = ["sasso", "carta", "forbici"];

//scelta casuale da parte del computer
/* let sceltaCasuale = Math.floor(Math.random() * oggetti.length);
console.log(sceltaCasuale);
computer = oggetti[sceltaCasuale];
container.innerText = computer; */

for (var i = 0; i < tentativi; i++) {
  //scelta giocatore
  giocatore = prompt('Inserisci forbice, sasso o carta');
  giocatore = giocatore.toLowerCase();
  console.log("giocatore: " + giocatore);
  //scelta computer casuale
  let sceltaCasuale = Math.floor(Math.random() * oggetti.length);
  computer = oggetti[sceltaCasuale];
  container.innerText = "il computer ha scelto: " + computer;
  console.log("pc: " + computer);
  //partita
  if (computer == giocatore) {
    console.log('parità');
  } else if ((giocatore == 'sasso' && computer == 'forbice')
    || (giocatore == 'forbice' && computer == 'carta')
    || (giocatore == 'carta' && computer == 'sasso')) {

    console.log('Hai vinto');
    risultato.innerText = "Hai vinto";
    puntiGiocatore++;

  } else {
    console.log('Hai perso ');
    puntiComputer++;
  }
}

console.log('pnt pc: ' + puntiComputer);
console.log('pnt giocatore: ' + puntiGiocatore);




/*  Sasso-Carta-Forbice-Lizard-Spock -> DESCRIZIONE REGOLE
Le forbici tagliano la carta
La carta avvolge il sasso
Il sasso schiaccia la lucertola
La lucertola avvelena Spock
Spock rompe le forbici
Le forbici decapitano la lucertola
La lucertola mangia la carta
La carta invalida Spock
Spock vaporizza il sasso
Il sasso rompe le forbici 
--------------TABELLA VITTORIE e SCONFITTE-------------
Gesto    || Vince              || Perde
Forbici  || Carta  - Lucertola || Sasso    - Spock
Carta    || Sasso  - Spock     || Forbici  - Lucertola
Sasso    || Forbici- Lucertola || Carta    - Spock
Lucertola|| Carta  - Spock     || Forbici  - Sasso
Spock    || Forbici- Sasso     || Carta    - Lucertola
*/

/* prova
const scelta = ["rock", "spock", "paper", "lizard", "scissors"];

export const selectWinner = (user1, user2) => {
  let result = null;

  if (user1.choice === user2.choice) {
    result = null;
  }

  if (user1.choice === "rock" && user2.choice === "scissors") {
    result = user1;
  }

  if (user1.choice === "scissors" && user2.choice === "paper") {
    result = user1;
  }

  if (user1.choice === "paper" && user2.choice === "rock") {
    result = user1;
  }

  if (user1.choice === "scissors" && user2.choice === "rock") {
    result = user2;
  }

  if (user1.choice === "paper" && user2.choice === "scissors") {
    result = user2;
  }

  if (user1.choice === "rock" && user2.choice === "paper") {
    result = user2;
  }

  return result;
};
*/



/* parte inserita dentro repo challeng network/game
  {
    name: "My Game - Christian",
    gameUrl: "",
    codeUrl: "https://github.com/Christian95Sp/game_Chri"
  }
*/