var exitButton = document.getElementById("exit-button");
var clickCount = 0;
var clickTimer = null;

exitButton.addEventListener("click", function() {
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;
  
  var buttonWidth = exitButton.offsetWidth * 3; // Triplicamos el ancho
  var buttonHeight = exitButton.offsetHeight * 3; // Triplicamos la altura
  
  var maxX = screenWidth - buttonWidth;
  var maxY = screenHeight - buttonHeight;
  
  var randomX = Math.floor(Math.random() * maxX);
  var randomY = Math.floor(Math.random() * maxY);
  
  exitButton.style.left = randomX + "px";
  exitButton.style.top = randomY + "px";
  
  // Reiniciar el temporizador en cada clic
  reiniciarTemporizador();
});

document.addEventListener("click", function(event) {
  var imageContainer = document.getElementById("image-container");
  clickCount++;
  
  var incremento = 5; // Puedes ajustar este valor según tus necesidades

  for (let i = 0; i < clickCount * incremento; i++) {
    var image = new Image();
    var index = Math.floor(Math.random() * 8) + 1;
    image.src = "data/" + index + ".png";
    image.classList.add("image");


    if (i === 0) {
      // Colocamos la primera imagen en la posición del mouse
      image.style.left = (event.clientX - 20) + "px";
      image.style.top = (event.clientY - 20) + "px";
    } else {
      // Colocamos las otras imágenes en posiciones aleatorias
      var randomX = Math.floor(Math.random() * window.innerWidth);
      var randomY = Math.floor(Math.random() * window.innerHeight);
      image.style.left = randomX + "px";
      image.style.top = randomY + "px";
    }

    imageContainer.appendChild(image);
  }

  // Sonido de clic
  var clickSound = new Audio("data/error.mp3");
  clickSound.play();

  if (clickCount >= 10) {
    dirigir_a_pagina();
  }
  
  // Reiniciar el temporizador en cada clic
  reiniciarTemporizador();
});

// Función para reiniciar el temporizador
function reiniciarTemporizador() {
  // Si hay un temporizador existente, borrarlo
  if (clickTimer !== null) {
    clearTimeout(clickTimer);
  }
  
  // Establecer un nuevo temporizador de 25 seg
  clickTimer = setTimeout(function() {
    // Llamar a dirigir_frases después de 25 seg
    dirigir_a_pagina();
  }, 25000); //25 seg
}

// Función para redirigir a la página ../frases/no_estaras.html
function dirigir_a_pagina() {
  window.location.href = "../cortazar/index.html";
}
