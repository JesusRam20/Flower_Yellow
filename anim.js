// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Eres muy", time: 15 },
  { text: "importante", time: 18 },
  { text: "para mi", time: 27 },
  { text: "desde que llegaste", time: 32 },
  { text: "haces que mis días sean más largos", time: 33 },
  { text: "Tienes una luz propia que transforma cualquier lugar.", time: 41 },
  { text: "sea muy especial", time: 47 },
  { text: "Estar contigo es como respirar aire fresco, todo se siente mejor", time: 54 },
  { text: "Cada palabra que dices tiene una armonía que me encanta escuchar", time: 59 },
  { text: "Tu manera de demostrar amor es única y hace que todo cobre sentido", time: 67 },
  { text: "Hoy es el día perfecto", time: 72 },
  { text: "para recordarte lo especial que eres", time: 78 },
  { text: "como un campo lleno de girasoles", time: 83 },
  { text: "que iluminan mi mundo.", time: 91 },
  { text: "I LOVE YOU", time: 97 },
  { text: "......", time: 104 },
  { text: ":), :D, ;V , XD ......(♥‿♥)", time: 140 },
];

// Función para actualizar las letras en tiempo real
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find((line) => time >= line.time && time < line.time + 6);

  if (currentLine) {
    var fadeInDuration = 1; // Duración más larga para un efecto más suave
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }

  requestAnimationFrame(updateLyrics); // Mejora la sincronización
}

// Iniciar actualización de letras cuando empiece la canción
audio.addEventListener("play", () => {
  requestAnimationFrame(updateLyrics);
});

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  if (titulo) {
    titulo.style.animation = "fadeOut 3s ease-in-out forwards";
    setTimeout(() => {
      titulo.style.display = "none";
    }, 3000);
  }
}

// Llama a la función después de 216 segundos
setTimeout(ocultarTitulo, 216000);
