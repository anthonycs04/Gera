const galeria = document.getElementById('galeria');

// Lista simulada de archivos en la carpeta /fotos
const archivos = [
  "WhatsApp Image 2025-02-02 at 11.55.45 AM (1).jpeg",
  "WhatsApp Image 2025-02-02 at 11.55.45 AM.jpeg",
  "WhatsApp Image 2025-02-02 at 2.07.55 PM.jpeg",
  "WhatsApp Image 2025-02-17 at 11.39.31 PM.jpeg",
  "WhatsApp Image 2025-04-17 at 12.48.09 AM (1).jpeg",
  "WhatsApp Image 2025-04-17 at 12.48.09 AM.jpeg",
  "WhatsApp Image 2025-04-17 at 12.48.10 AM (1).jpeg",
  "WhatsApp Image 2025-04-17 at 12.48.10 AM.jpeg",
  "WhatsApp Image 2025-04-17 at 12.48.12 AM.jpeg",
  "WhatsApp Image 2025-04-17 at 12.48.15 AM (1).jpeg",
  "WhatsApp Image 2025-04-17 at 12.48.15 AM.jpeg",
  "WhatsApp Image 2025-04-17 at 12.48.16 AM (1).jpeg",
  "WhatsApp Image 2025-04-17 at 12.48.16 AM (2).jpeg",
  "WhatsApp Image 2025-04-17 at 12.48.16 AM.jpeg",
  "WhatsApp Video 2025-04-17 at 12.48.12 AM.mp4",
  "WhatsApp Video 2025-04-17 at 12.48.13 AM.mp4",
  "WhatsApp Video 2025-04-17 at 12.48.14 AM.mp4",
  "WhatsApp Video 2025-04-17 at 12.48.15 AM.mp4",
];
const imagenesExt = ['.jpg', '.jpeg', '.png', '.webp'];
const videosExt = ['.mp4', '.mov', '.webm'];

archivos.forEach(nombre => {
  const lower = nombre.toLowerCase();
  const card = document.createElement('div');
  card.classList.add('card');

  if (imagenesExt.some(ext => lower.endsWith(ext))) {
    const img = document.createElement('img');
    img.src = `fotos/${nombre}`;
    img.alt = 'Foto juntos';
    card.appendChild(img);
  } else if (videosExt.some(ext => lower.endsWith(ext))) {
    const video = document.createElement('video');
    video.src = `fotos/${nombre}`;
    video.controls = true;
    video.playsInline = true;
    video.preload = 'metadata';
    card.appendChild(video);
  }

  galeria.appendChild(card);
});