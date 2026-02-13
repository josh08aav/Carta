const envelope = document.getElementById("envelope");
const title = document.getElementById("title");
const message = document.getElementById("message");

// Personalización
const nombre = prompt("Mi Panquesito");
const mensajePersonalizado = prompt("Mi amor yo sé que no es una carta escrita a mano pero te dije que seria creativo, Amor mio desde que te conocí le has dado color a mis días y sé que muchas veces no te amo como debería es mi culpa y lo lamento tal vez mañana no podamos hacer la gran cosa y aunque sea queria que hicieramos algo sencillo entre nosotros y el próximo fin hacer algo más planeado será una sorpresa permiteme amarte y hacerte sentir amada cada dia no solamente los dias especiales o los dias que esperarias que te amara asi que desde mi corazón te pregunto 💖¿Aceptarias ser mi San Valentín?💖
  ");

if (nombre) {
  title.textContent = `Para ${nombre} 💖`;
}

if (mensajePersonalizado) {
  message.textContent = mensajePersonalizado;
}

envelope.addEventListener("click", () => {
  envelope.classList.toggle("open");
});
