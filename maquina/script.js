// Array de frases
const frases = [
  "No fueron 30.000",
  "No va a hacer lo que dijo",
  "El congreso no lo va a dejar",
  "La universidad pública adoctrina",
  "El estado es un enemigo",
  "La ESI deforma la cabeza",
  "La venta de humanos es una discusión filosófica",
  "El calentamiento global es una mentira socialista",
  "Había que pagar la fiesta",
  "Venimos de 100 años de decadencia",
  "El pobre es pobre porque quiere",
  "El que las hace, las paga",
  "Gerentes de la pobreza",
  "Fue una guerra",
  "Pagábamos poco",
  "Yo voy a estar bien porque trabajo",
  "Tienen que agarrar la pala",
  "Cárcel o bala",
];

// Arreglo para almacenar los sonidos
const sonidos = [
  "s1.mp3",
  "s2.mp3",
  "s3.mp3",
  "s4.mp3",
  "s5.mp3",
  "s6.mp3",
  "s7.mp3",
  "s8.mp3",
];

let contadorClics = 0; // Contador de clics en el botón de cerrar frase
let volumen = 0.4;
let ventanasPorCierre = 1; // Número inicial de ventanas creadas por cada cierre

// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Función para obtener una frase aleatoria del array
  function obtenerFraseAleatoria() {
    const indice = Math.floor(Math.random() * frases.length);
    return frases[indice];
  }

  // Función para crear un elemento con la frase en una posición aleatoria y reproducir un sonido aleatorio
  function crearElementoFrase() {
    // Crea el elemento div
    const div = document.createElement("div");
    // Agrega la clase "frase"
    div.classList.add("frase");
    // Establece el texto con una frase aleatoria
    div.textContent = obtenerFraseAleatoria();
    // Genera posiciones aleatorias dentro de la pantalla con un margen de 20px en todos los lados
    const posX = Math.max(
      20,
      Math.min(
        Math.random() * (window.innerWidth - 330),
        window.innerWidth - 330
      )
    ); // El ancho del botón es 150px, dejamos un margen de 20px
    const posY = Math.max(
      20,
      Math.min(
        Math.random() * (window.innerHeight - 140),
        window.innerHeight - 140
      )
    ); // El alto del botón es 150px, dejamos un margen de 20px
    // Establece la posición del elemento
    div.style.left = posX + "px";
    div.style.top = posY + "px";
    // Establece el margen derecho a 10px más
    div.style.marginRight = "10px";
    // Establece el margen inferior a 0 si la frase está en la parte inferior de la pantalla
    if (posY + div.clientHeight >= window.innerHeight) {
      div.style.marginBottom = "0";
    }
    // Reproduce un sonido aleatorio
    reproducirSonidoAleatorio();
    // Crea el botón "X" para generar nuevas frases
    const closeButton = document.createElement("button");
    closeButton.textContent = "X";
    closeButton.classList.add("close-button");
    closeButton.addEventListener("click", () => {
      // Genera un número progresivo de nuevas frases
      const numFrases = Math.min(ventanasPorCierre, 20);
      for (let i = 0; i < numFrases; i++) {
        crearElementoFrase();
      }
      div.remove(); // Elimina el elemento actual
      contadorClics++; // Incrementa el contador de clics
      // Aumenta el número de ventanas creadas por cada cierre
      ventanasPorCierre++;
      // Verifica si el contador de clics es mayor o igual a 20
      if (contadorClics >= 25) {
        activarOcultos();
      }
    });
    // Agrega el botón "X" al elemento div
    div.appendChild(closeButton);
    // Agrega el elemento al cuerpo del documento
    document.body.appendChild(div);
  }

  // Función para reproducir un sonido aleatorio
  function reproducirSonidoAleatorio() {
    const sonidoAleatorio = sonidos[Math.floor(Math.random() * sonidos.length)];
    const audio = new Audio(`sound/${sonidoAleatorio}`);
    audio.volume = volumen;
    audio.play();
  }

  // Función para borrar todos los mensajes de la pantalla
  function borrarMensajes() {
    const mensajes = document.querySelectorAll(".frase");
    mensajes.forEach((mensaje) => mensaje.remove());
  }

  // Función para ocultar el div principal y mostrar el div ocultos
  function activarOcultos() {
    borrarMensajes();
    document.getElementById("principal").style.display = "none";
    document.getElementById("ocultos").style.display = "block";
  }

  // Temporizador de 40 segundos para activar la función
  setTimeout(() => {
    activarOcultos();
  }, 30000);

  // Obtiene el botón
  const button = document.querySelector(".rojo");
  // Agrega un event listener para el clic en el botón
  button.addEventListener("click", () => {
    contadorClics++;
    crearElementoFrase();
    // Verifica si el contador de clics es mayor o igual a 20
    if (contadorClics >= 30) {
      activarOcultos();
    }
  });

  // Agrega un event listener para los clics en cualquier lugar de la pantalla
  document.addEventListener("click", (event) => {
    // Asegura que el clic no sea en el botón "X" de un mensaje
    if (
      !event.target.classList.contains("close-button") &&
      !event.target.classList.contains("rojo")
    ) {
      contadorClics++;
      // Verifica si el contador de clics es mayor o igual a 20
      if (contadorClics >= 20) {
        activarOcultos();
      }
    }
  });
});
