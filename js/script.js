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

//assegno al pulsante l'evento click
button.addEventListener('click', function () {
    // recupero l'evento che dovra contenere la griglia dal dom
    const grid = document.getElementById('grid');

    // ciclo per creare le 100 caselle
    for (let i = 0; i < 100; i++){
        
    }
})