//Snack7
//Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

const n = Number.parseInt(prompt("Inserisci un numero"), 10)

for (let i = 0; i < n; i++) {

    const array = [];

    for (let x = 0; x < 10; x++) {

        array.push(Math.floor(Math.random() * 100 + 1), 10)

    }

    console.log(array)
}