//funzione che crea ogni singolo quadratino
function createSingleSquare(num) {
    // creao il quadrato come div
    const square = document.createElement('div');

    // aggiungo la classe square al div
    square.innerText = num + 1;

    // aggiungo l'evento click al quadrato
    return square;
}

//recupero il pulsante
const button = document.getElementById('play');