// definimos nuestra variables
const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

// agregamos el objeto window para cargar nuestra funcion
window.addEventListener('load', iniciarJuego)

// creamos una funcion para inicializar el juego
function iniciarJuego() {
    // game.fillRect(50,50,50,50)
    game.font= "25px Monserrat";
    game.fillStyle = "blue";
    game.textAlign = "left";
    game.fillText('gual', 50,50)
}

