//Crea un array vuoto.
//Chiedi per 6 volte all'utente di inserire un numero,
//se è dispari inseriscilo nell'array.

const listaNumeri = [];


for (let i = 0; i < 6; i++) {
    const userNumber = Number.parseInt(prompt("Inserisci un numero"), 10);

    if (userNumber % 2 === 1) {
        listaNumeri.push(userNumber);
    }

}

console.log(listaNumeri)