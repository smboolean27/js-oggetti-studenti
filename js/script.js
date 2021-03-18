// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// 1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studente = {
  nome: "Samuele",
  "cognome": "Madrigali",
  'eta': 29
};

// 2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for ( var key in studente ) {
  console.log(key + " -> " + studente[key]);
}

//3. Creare un array di oggetti di studenti.
var studenti = [
  {
    nome: "Samuele",
    cognome: "Madrigali",
    eta: 29
  },
  {
    nome: "Samantha",
    cognome: "Madrigali",
    eta: 33
  },
  {
    nome: "Alice",
    cognome: "Sinelli",
    eta: 23
  }
];
console.log("Stampiamo gli studenti:");
// 4. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for ( var i = 0; i < studenti.length; i++ ) {
  console.log(studenti[i].nome + " " + studenti[i].cognome);
}

// 5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var nuovoStudente = {};

var nome = prompt("Inserisci il nome");
var cognome = prompt("Inserisci il cognome");
var eta = prompt("Inserisci il eta");

nuovoStudente.nome = nome;
nuovoStudente.cognome = cognome;
nuovoStudente.eta = eta;

// 6. inserisco il nuovo oggetto nell'array
studenti.push(nuovoStudente);
