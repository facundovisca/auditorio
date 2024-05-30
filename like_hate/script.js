$(document).ready(function () {
  let likeCount = 0;
  let hateCount = 0;
  let totalLikes = 0;
  let totalHate = 0;
  let totalInteractions = 0;
  let hateInterval;

  const likeButton = $("#likeButton");
  const hateButton = $("#hateButton");
  const likeValue = $("#likeValue");
  const hateValue = $("#hateValue");

  likeButton.on("click", () => {
    likeCount++;
    likeValue.text(likeCount);
    totalLikes++;
    totalInteractions++;
    console.log(
      `Like count: ${likeCount}, Hate count: ${hateCount}, Total interactions: ${totalInteractions}`
    );
    console.log(`Total likes: ${totalLikes}, Total hates: ${totalHate}`);
    checkInteractions();
  });

  hateButton.on("click", () => {
    totalHate++;
    totalInteractions++;
    console.log(
      `Like count: ${likeCount}, Hate count: ${hateCount}, Total interactions: ${totalInteractions}`
    );
    console.log(`Total likes: ${totalLikes}, Total hates: ${totalHate}`);
    checkInteractions();

    clearInterval(hateInterval); // Limpiamos cualquier intervalo activo previo
    hateInterval = setInterval(() => {
      // Incremento aleatorio entre 50 y 200
      const increment = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
      hateCount += increment;
      hateValue.text(hateCount);
      console.log(`Hate count (incrementing): ${hateCount}`);
    }, 1); // Incremento mucho más rápido

    // Intervalo aleatorio para desactivar el contador de "no me gusta"
    const intervalDuration = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
    setTimeout(() => {
      clearInterval(hateInterval); // Desactivar contador de no me gusta después de un intervalo aleatorio
      console.log(`Hate count (final): ${hateCount}`);
    }, intervalDuration);
  });

  function checkInteractions() {
    if (totalInteractions >= 9) {
      if (totalLikes > totalHate) {
        window.location.href = "../frases/bebiendo.html";
      } else {
        window.location.href = "../frases/sed.html";
      }
    }
  }
});
