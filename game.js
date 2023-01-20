// definimos nuestra variables
const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

//funcion que se ejecuta cuando se cambia el tamaño de la ventana
/* window.addEventListener("resize", function () {
  game.width = window.innerWidth;
  game.height = window.innerHeight;
}); */

// agregamos el objeto window para cargar nuestra funcion
window.addEventListener("load", iniciarJuego);

// creamos una funcion para inicializar el juego
function iniciarJuego() {
  // variables para definir el tamaño del canvas
  let tamañoCanvas;

  // codicional para redimensionar canvas
/*   if (window.innerHeight > window.innerWidth) {
    tamañoCanvas = window.innerWidth * 0.8;
  } else {
    tamañoCanvas = window.innerHeight * 0.8;
  }
   */
  // usando operador ternario
  tamañoCanvas = window.innerHeight > window.innerWidth 
  ? window.innerWidth * .80 
  : window.innerHeight * .80;

  canvas.setAttribute('width', tamañoCanvas);
  canvas.setAttribute('height', tamañoCanvas);
  
  const elementsTamaño = (tamañoCanvas / 10) - 1;

  console.log({tamañoCanvas, elementsTamaño})

  game.font = elementsTamaño + 'px Verdana';
  game.textAlign = 'end';

  for (let i = 0; i <= 10; i++) {
    for(let z = 1; z < 11; z++){
      game.fillText(emojis['X'], elementsTamaño * i, elementsTamaño * z);
    }
  }

  /*   game.fillRect(50,50,50,50)
    game.font= "25px Monserrat";
    game.fillStyle = "blue";
    game.textAlign = "left";
    game.fillText('gual', 50,50) */
}
