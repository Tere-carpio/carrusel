
/*mi querido navbar...*/ 

// Mostrar y ocultar navbar vertical
function showVertical() {
    const sidebar = document.querySelector('.vertical')
    sidebar.classList.add('active');
}
function hideVertical() {
    const sidebar = document.querySelector('.vertical')
    sidebar.classList.remove('active');
}
//coloriiines aleatorios en nav y vertical al hacer hover en links (excepto el logo)
document.addEventListener("DOMContentLoaded", () => {

  const colores = [    
    "#a8b4bdcc",
    "#aba7b3cc",
    "#d9b0a9cc",
    "#e4a470cc",
    ];
function colorRandom() {
    return colores[Math.floor(Math.random() * colores.length)];
  }

  const nav = document.querySelector("nav");
  const vertical = document.querySelector(".vertical");

  // Aplica el mismo color a ambos contenedores
  function setColorAmbos(color) {
    if (nav) {
      nav.classList.add("coloreado");
      nav.style.backgroundColor = color;
    }
    if (vertical) {
      vertical.classList.add("coloreado");
      vertical.style.backgroundColor = color;
    }
  }

  // Resetea ambos contenedores
  function resetAmbos() {
    if (nav) {
      nav.classList.remove("coloreado");
      nav.style.backgroundColor = "";
    }
    if (vertical) {
      vertical.classList.remove("coloreado");
      vertical.style.backgroundColor = "";
    }
  }

  // Hover sobre links (en horizontal y vertical), excepto .circulo
  document.querySelectorAll("nav a:not(.circulo)").forEach(link => {
    link.addEventListener("mouseenter", () => {
      const c = colorRandom();
      setColorAmbos(c);
    });
  });

  // Solo resetea si sales de NAV y no estás entrando a VERTICAL
  nav.addEventListener("mouseleave", (e) => {
    const destino = e.relatedTarget; // a dónde va el ratón
    if (vertical && destino && vertical.contains(destino)) return;
    resetAmbos();
  });

  // Solo resetea si sales de VERTICAL y no estás entrando a NAV
  vertical.addEventListener("mouseleave", (e) => {
    const destino = e.relatedTarget;
    if (nav && destino && nav.contains(destino)) return;
    resetAmbos();
  });
});