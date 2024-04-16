const container = document.getElementById("container");
const risultato = document.getElementById("risultato");

/* CARTA SASSO FORBICE NORMALE
--------------TABELLA------------------------
--------||-VITTORIA-||-SCONFITTA-||-PAREGGIO-----------
Forbici || Carta    || Sasso     || Forbici
Carta   || Sasso    || Forbici   || Carta
Sasso   || Forbici  || Carta     || Sasso
 */

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

/* parte inserita dentro repo challeng network/game
  {
    name: "My Game - Christian",
    gameUrl: "",
    codeUrl: "https://github.com/Christian95Sp/game_Chri"
  }
*/

alert("ciao! ti va di fare qualche partita?");

const oggetti = ["sasso", "carta", "forbici"];

const tentativi = 3;
let giocatore;
let computer;
let puntiComputer = 0;
let puntiGiocatore = 0;

let sceltaUtente;
let nomeGiocatore = window.prompt("Ciao inserisci il tuo nome: ");
document.getElementById("informazioni").innerHTML = "Benvenuto " + nomeGiocatore + "!";
//nome giocatore sotto segni
//document.getElementById("giocatore").innerHTML = nomeGiocatore + ": "
document.getElementById("giocatore").innerHTML = nomeGiocatore + ": ";
document.getElementById("computer").innerHTML = "Computer: ";

function cliccatoCarta() {
  sceltaUtente = "carta";
  alert(nomeGiocatore + " hai scelto " + sceltaUtente + ", ora clicca 'conferma' per avviare il match, buona fortuna!");
}

function cliccatoForbici() {
  sceltaUtente = "forbici";
  alert(nomeGiocatore + " hai scelto " + sceltaUtente + ", ora clicca 'conferma' per avviare il match, buona fortuna!");
}

function cliccatoSasso() {
  sceltaUtente = "sasso";
  alert(nomeGiocatore + " hai scelto " + sceltaUtente + ", ora clicca 'conferma' per avviare il match, buona fortuna!");
}

function verdetto() {
  //document.getElementById("informazioni").style.display = "none";
  //document.getElementById("carta").style.display = "none";
  //document.getElementById("forbici").style.display = "none";
  //document.getElementById("sasso").style.display = "none";
  //document.getElementById("pulsante").style.display = "none";

  // for (var i = 0; i < tentativi; i++) {
  //scelta giocatore
  giocatore = sceltaUtente;
  console.log("Hai scelto: " + giocatore);

  //scelta computer casuale
  let sceltaComputer = Math.floor(Math.random() * oggetti.length);
  computer = oggetti[sceltaComputer];
  console.log("il computer ha scelto: " + computer);

  //partita
  if (computer == giocatore) {
    console.log('parità');
    document.getElementById("risultato-partita").innerHTML = "Pareggio";
    document.getElementById("risultato-partita").classList.add("yellow-text");

  } else if ((giocatore == 'sasso' && computer == 'forbice')
    || (giocatore == 'forbice' && computer == 'carta')
    || (giocatore == 'carta' && computer == 'sasso')) {

    console.log('Hai vinto');
    document.getElementById("risultato-partita").innerHTML = "Hai vinto";
    document.getElementById("risultato-partita").classList.add("green-text");
    puntiGiocatore++;

  } else {
    console.log('Hai perso ');
    document.getElementById("risultato-partita").innerHTML = "Hai perso";
    document.getElementById("risultato-partita").classList.add("red-text");
    puntiComputer++;
  }
  // }

  //document.getElementById("informazioni").innerHTML = "Il computer ha scelto " + computer + ". Tu, hai scelto " + giocatore;
  document.getElementById("giocatore").innerHTML = nomeGiocatore + ": " + giocatore;
  document.getElementById("computer").innerHTML = "Computer: " + computer;

  console.log('pnt pc: ' + puntiComputer);
  console.log('pnt giocatore: ' + puntiGiocatore);

  document.getElementById("segnapunti-giocatore").innerHTML = nomeGiocatore + ": " + puntiGiocatore;
  document.getElementById("segnapunti-computer").innerHTML = "Computer: " + puntiComputer;

  document.getElementById("informazioni").innerHTML = "Vuoi giocare ancora?? Scegli"

}
