let videos = [];
let videoActual = 0;
let videoWidth = 640;
let videoHeight = 480;
let primerPlay = true;
let fuente;

function preload() {
  // Cargar los videos
  for (let i = 1; i <= 4; i++) {
    let video = createVideo(`vid/vid${i}.mp4`);
    video.hide();
    videos.push(video);
  }
  fuente = loadFont("data/fuente.ttf");
}

function setup() {
  let canvas = createCanvas(videoWidth, videoHeight);
  canvas.parent("sketch-container"); // El lienzo se agrega dentro del contenedor del sketch

  // Reproducir el primer video en bucle
  videos[videoActual].loop();
}

function draw() {
  // Dibujar el video actual en el lienzo
  image(videos[videoActual], 0, 0, videoWidth, videoHeight);

  // Si es la primera vez que se reproduce el video, reproducirlo automáticamente
  if (primerPlay) {
    videos[videoActual].play();
    primerPlay = false;
  }

  // Dibujar el texto superpuesto si es el segundo o el cuarto video
  if (videoActual === 1 || videoActual === 3) {
    dibujarTexto();
  }
}

function playVideo() {
  videos[videoActual].play();
}

function pauseVideo() {
  videos[videoActual].pause();
}

function nextVideo() {
  // Detener la reproducción del video actual
  videos[videoActual].pause();

  // Cambiar al siguiente video
  videoActual = (videoActual + 1) % videos.length;
  videos[videoActual].loop();
  primerPlay = true; // Reiniciar primerPlay para reproducir automáticamente el próximo video
}

function prevVideo() {
  // Detener la reproducción del video actual
  videos[videoActual].pause();

  // Cambiar al video anterior
  videoActual = (videoActual - 1 + videos.length) % videos.length;
  videos[videoActual].loop();
  primerPlay = true; // Reiniciar primerPlay para reproducir automáticamente el próximo video
}

// Reproducir el primer video al cargar la página o al actualizarla
window.onload = function () {
  videos[videoActual].play();
};

// Función para dibujar el texto superpuesto
function dibujarTexto() {
  let capaTexto = "";

  if (videoActual === 1) {
    capaTexto =
      "ahora se vinieron a acordar? la marcha mas populista y pochoclera que vi en mi vida. ridiculo. que pidan la auditoria de todo. LÁGRIMAS DE ZURDO. ¿CHE SEGUROS QUE SON DE LA UBA ESTOS? Son de la UBHA, Universidad de Bagartos Hambrientos. Fue todo política, los verdaderos estudiantes, estaban estudiando. 70 años de peronismo no fueron gratis ni suficiente parece Son los vagos de Baradel Belliboni y Grabois Este sujeto es estudiante??? x favor no jodan Chorros, corruptos y vagos. Eran todos gordos tatuados de la CGT Se les acaba el curro LPM a estos le pago la facultad con mis impuestos. Siempre quise ver cómo utilizaban una taser Los docentes adoctrinan Hay que optimizar recursos Kirchos y orcos, una payasada Herederos de la cultura monto. Después, cuando se hacen humo se quejan. Que corto se quedo Massera Vagos, drogos, delincuentes y flojos. No más pegados a la teta del Estado. Trabajen Son muchos años de socialismo carnivoro y destructivo; los argentinos ya tienen incrustado el chip socialista, ese que les impide percibir el cambio, que los acobarda, que no los deja con valentia trabajar para hacer a Argentina grande nuevamente, sino continuar en las mismas… ¿¿Y toda esa gente protestando paga impuestos?? La asquerosa izquierda perdiendo el tiempo Cuánto curro se cortó ahí A los fisuras de mi barrio le pagaron 30 mil pesos por ir Lleno de ñoquis,hijos de ñoquis y nietos de ñoquis. Loa argentinos que trabajan están felices con Milei. Los flojos no Parasitos inservibles. LÁGRIMAS DE ZURDO. Esa pila de ignorantes quieren seguir en miseria Dan asco izquierdos mantenidos por eso no progresan por esperar todo de un estado La motosierra va quieran o no zurdos Son golpistas TIRA DE ZÁNGANOS MALOLIENTES.";
  } else if (videoActual === 3) {
    capaTexto =
      "DIOS MIO! QUE BIEN PUSE EL VOTO!!! Aflojá un poco con las buenas noticias, Peluca. SE FESTEJA. Son parásitos, bacterias, virus mortales para Argentina. El mejor gobierno de la historia, abrazo. a buscar laburo Ñoquis. Nunca voté tan bien. Lloran los ñoquis. Excelente medida. Perfecto jajajjjaajaj coman mierda todos. Increible, todo bien hace el gobierno. EXACTAMENTE LO QUE VOTÉ. JUSTO LO QUE YO VOTE!! AFUERA LOS ÑOQUIS KIRCHNERISTAS!!! VLLC. DAME UNA URNAAAAA. Imagino que esos 70 mil tendrán el C.V y los estudios al día para conseguir un laburo sin acomodo. Aparte del laburo estatal, que sabés hacer??? pregunta seria. Labura en el sector privado parásito. SE BRINDA DE UNA MANERA IMPRESIONANTE. Van a tener que contrubir con algo que sirva! No van a vivir mas con la nuestra, Afuera! Ahora te va a tocar trabajar de verdad y no vivir del cuento. Armate un cv planero hdp. Ya ni se esfuerzan estos brutos. Van de salida. Despiden parasitos estatales:  tragedia nacional intercontinental. NO NOS IMPORTA. DE UNA. Karma. le falta todavía a esa actriz. Motosierra!!! RAJEN A TODOS PRESI!!!!!! PATADA EN EL CULO... DIRECTO, SIN TELEGRAMA. Alberto hizo desaparecer el asado. Milei a los ñoquis. Los ñoquis del 29 en el plato por ser almorzados. No sé si alegrarme porque los rajaron o sentirme mal por sus familias que la van a pasar mal ahora que ya no viven del estado. PARÁSITOS K AFUERA. Hay que despedir a los ñoquis, son los pagados para ir a las marchas de la cgt y de todos los sindicatos q hay en la Repùblica Argentina. 15 mil inútiles o ñoquis menos que tenemos que mantener. Grande Milei! Totalmente de acuerdo, además de empleados maltratadores son ignorantes inoperantes incapacitados y mucho menos idóneos!!!";
  }

  let opacidad = map(mouseY + 50, 0, height, 255, 90); // Mapear la posición del mouse a la opacidad del texto con un mínimo de 80

  blendMode(SCREEN); //

  fill(255, opacidad);
  textFont(fuente);
  textSize(15.1);
  textAlign(LEFT, TOP);
  textWrap(CHAR);
  text(capaTexto, 5, 5, videoWidth - 10, videoHeight - 10);
  blendMode(BLEND);
}
