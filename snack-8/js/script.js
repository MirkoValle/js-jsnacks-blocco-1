//Snack8 
//Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l'altro di verde. Partendo da un array di numeri, stampiamo nell'id rosso i numeri dispari e in verde i numeri pari.

const pari = document.getElementById("pari")
const dispari = document.getElementById("dispari")

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        pari.innerHTML += array[i] + " ";
    } else {
        dispari.innerHTML += array[i] + " ";
    }

}


