//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.



const listaInvitati = ["Jay", "Daisy", "Nick", "Tom", "Jordan"];

const userName = prompt("Inserisci il tuo nome");

if (listaInvitati.includes(userName)) {
    console.log("Prego può entrare")
} else {
    console.log("Mi dispiace non è nella lista degli invitati")
}