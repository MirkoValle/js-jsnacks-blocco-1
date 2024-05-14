//Snack8 
//Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l'altro di verde. Partendo da un array di numeri, stampiamo nell'id rosso i numeri dispari e in verde i numeri pari.

const divRed = document.createElement("div");
divRed.classList.add("rosso");

const divGreen = document.createElement("div");
divGreen.classList.add("verde");

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const container = document.getElementById("container");

for (let i = 0; i < array.length; i++) {
    const numero = document.createElement("p");
    numero.append(array[i])

    if (array[i] % 2 == 0) {
        divGreen.appendChild(numero)

    } else {
        divRed.appendChild(numero)

    }

}

container.appendChild(divGreen);
container.appendChild(divRed);


