//L'utente inserisce due numeri in successione, con due prompt.
//Il software stampa il maggiore.


const numeroA = Number.parseInt(prompt("Inserisci un numero"));
const numeroB = Number.parseInt(prompt("Inserisci un numero"));

if (numeroA > numeroB) {
    console.log(numeroA)
} else {
    console.log(numeroB)
}