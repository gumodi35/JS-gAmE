/*
// definimos nuestra variables
const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

//funcion que se ejecuta cuando se cambia el tamaño de la ventana
 window.addEventListener("resize", function () {
  game.width = window.innerWidth;
  game.height = window.innerHeight;
}); 

// agregamos el objeto window para cargar nuestra funcion
window.addEventListener("load", iniciarJuego);
window.addEventListener("resize", iniciarJuego);

// creamos una funcion para inicializar el juego
function iniciarJuego() {
  // variables para definir el tamaño del canvas
  let tamañoCanvas;

  // codicional para redimensionar canvas
 if (window.innerHeight > window.innerWidth) {
    tamañoCanvas = window.innerWidth * 0.8;
  } else {
    tamañoCanvas = window.innerHeight * 0.8;
  }
   
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

     game.fillRect(50,50,50,50)
    game.font= "25px Monserrat";
    game.fillStyle = "blue";
    game.textAlign = "left";
    game.fillText('gual', 50,50) 
}
*/

// checar este codigo para acomodar el mio

const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

let canvasSize;
let elementsSize;

window.addEventListener("load", setCanvasSize);
window.addEventListener("resize", setCanvasSize);

function setCanvasSize() {
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }

  canvas.setAttribute("width", canvasSize);
  canvas.setAttribute("height", canvasSize);

  elementsSize = canvasSize / 10;

  startGame();
}

const buttons = document.querySelectorAll(".btns button");
buttons.forEach(function (button) {
  button.addEventListener("click", handleButtonClick);
});

function handleButtonClick(event) {
  const button = event.target;
  console.log(`El botón ${button.id} fue presionado`);
}

const flechas = window.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
  event.preventDefault();
  if (event.key === "ArrowUp") {
    console.log("La tecla de flecha hacia arriba fue presionada");
  } else if (event.key === "ArrowDown") {
    console.log("La tecla de flecha hacia abajo fue presionada");
  } else if (event.key === "ArrowLeft") {
    console.log("La tecla de flecha hacia izquierda fue presionada");
  } else if (event.key === "ArrowRight") {
    console.log("La tecla de flecha hacia derecha fue presionada");
  }
}

function startGame() {
  console.log({ canvasSize, elementsSize });

  game.font = elementsSize + "px Verdana";
  game.textAlign = "end";

  const map = maps[1];
  const mapRows = maps[0].trim().split("\n");
  const mapRowCols = mapRows.map((row) => row.trim().split(""));
  console.log(map, mapRows, mapRowCols);

  for (row = 1; row <= 10; row++) {
    for (col = 1; col <= 10; col++) {
      game.fillText(
        emojis[mapRowCols[row - 1][col - 1]],
        elementsSize * col,
        elementsSize * row
      );
    }
  }
}
