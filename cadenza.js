/*silder de las fotos solas de los proyectos*/
document.addEventListener("DOMContentLoaded", () => {  
const funcionac = document.querySelector(".pcgaleria");
  const antesc = document.querySelector(".antes");
  const despuesc = document.querySelector(".despues");

  antesc.addEventListener("click", () => {
    funcionac.scrollBy({ left: -funcionac.clientWidth, behavior: "smooth" });
  });

  despuesc.addEventListener("click", () => {
    funcionac.scrollBy({ left: funcionac.clientWidth, behavior: "smooth" });
  });
});