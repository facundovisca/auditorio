const initialImages = [
  "c01.png",
  "c02.png",
  "c03.png",
  "c04.png",
  "c05.png",
  "c06.png",
  "c07.png",
  "c08.png",
  "c09.png",
];
const replacementImages = [
  "c10.png",
  "c11.png",
  "c12.png",
  "c13.png",
  "c14.png",
  "c15.png",
  "c16.png",
  "c17.png",
  "c18.png",
];
const clickedCards = Array(initialImages.length).fill(false);
let currentAudio = null; // Para mantener la referencia al audio actual

// Función para reproducir el audio correspondiente a la imagen
function playAudio(index) {
  const audio = document.getElementById(
    `audio-${initialImages[index].slice(0, -4)}`
  ); // Eliminar ".png" del nombre de la imagen para obtener el ID del audio
  if (audio) {
    if (currentAudio) {
      currentAudio.pause(); // Detener la reproducción del audio anterior si lo hay
      currentAudio.currentTime = 0; // Reiniciar el audio para que comience desde el principio
    }
    currentAudio = audio; // Actualizar el audio actual
    audio.play(); // Reproducir el audio correspondiente
  }
}

// Función para detener el audio
function stopAudio(index) {
  const audio = document.getElementById(
    `audio-${initialImages[index].slice(0, -4)}`
  ); // Eliminar ".png" del nombre de la imagen para obtener el ID del audio
  if (audio && audio === currentAudio) {
    audio.pause(); // Detener la reproducción del audio
    audio.currentTime = 0; // Reiniciar el audio para que comience desde el principio
    currentAudio = null; // Limpiar la referencia al audio actual
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const gameContainer = document.getElementById("game-container");

  initialImages.forEach((image, index) => {
    const card = createCard(image, index);
    gameContainer.appendChild(card);
  });
});

function createCard(image, index) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundImage = `url('img/${image}')`;
  card.dataset.image = image;
  card.dataset.index = index;

  card.addEventListener("click", handleCardClick);

  return card;
}

function handleCardClick(event) {
  const card = event.target;
  const index = parseInt(card.dataset.index);

  // Cambiar la imagen de c03 a c12
  if (initialImages[index] === "c03.png" && !clickedCards[index]) {
    card.style.backgroundImage = `url('img/c12.png')`;
    card.dataset.image = "c12.png"; // Actualizar el nombre de la imagen en el dataset
    card.addEventListener("click", function () {
      window.location.href = "../benedetti/index.html"; // Redirigir al hacer clic en c12
    });
    clickedCards[index] = true;
    playAudio(index); // Reproducir el audio correspondiente
  }
  // Cambiar la imagen de c05 a c14
  else if (initialImages[index] === "c05.png" && !clickedCards[index]) {
    card.style.backgroundImage = `url('img/c14.png')`;
    card.dataset.image = "c14.png"; // Actualizar el nombre de la imagen en el dataset
    card.addEventListener("click", function () {
      window.location.href = "../like_hate/index.html"; // Redirigir al hacer clic en c14
    });
    clickedCards[index] = true;
    playAudio(index); // Reproducir el audio correspondiente
  }
  // Cambiar la imagen de c07 a c16
  else if (initialImages[index] === "c07.png" && !clickedCards[index]) {
    card.style.backgroundImage = `url('img/c16.png')`;
    card.dataset.image = "c16.png"; // Actualizar el nombre de la imagen en el dataset
    card.addEventListener("click", function () {
      window.location.href = "../frases/cuanta_ciudad.html"; // Redirigir al hacer clic en c16
    });
    clickedCards[index] = true;
    playAudio(index); // Reproducir el audio correspondiente
  }
  // Redirigir a index.html si la imagen es c12.png, c14.png o c16.png
  else if (
    clickedCards[index] &&
    ["c12.png", "c14.png", "c16.png"].includes(card.dataset.image)
  ) {
    window.location.href = "index.html";
  }
  // Lógica estándar para las demás imágenes
  else {
    if (clickedCards[index]) {
      card.style.backgroundImage = `url('img/${initialImages[index]}')`;
      stopAudio(index); // Detener el audio correspondiente
      clickedCards[index] = false;
    } else {
      card.style.backgroundImage = `url('img/${replacementImages[index]}')`;
      playAudio(index); // Reproducir el audio correspondiente
      clickedCards[index] = true;
    }
  }
}
