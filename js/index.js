// Scroll to specific values
// scrollTo is the same
window.scroll({ top: 2500, left: 0, behavior: "smooth" });

// Scroll certain amounts from current position
window.scrollBy({
  top: 100, // could be negative value
  left: 0,
  behavior: "smooth"
});

//Scroll
ScrollReveal().reveal(".about", {
  duration: 2000,
  origin: "bottom"
});
ScrollReveal().reveal(".info-left", {
  duration: 2000,
  origin: "left",
  distance: "300px",
  viewFactor: 0.2
});
ScrollReveal().reveal(".info-right", {
  duration: 2000,
  origin: "right",
  distance: "300px",
  viewFactor: 0.2
});
ScrollReveal().reveal(".info-top", {
  duration: 2000,
  origin: "top",
  distance: "300px",
  viewFactor: 0.2
});

// Property Management Details

var element1 = document.getElementById("PropertyManagement0");
var element2 = document.getElementById("PropertyManagement1");
var element3 = document.getElementById("PropertyManagement2");
var element4 = document.getElementById("PropertyManagement3");


var element5 = document.getElementById('titleToChangePropertyManagementDetails');
var element6 = document.getElementById('paraToChangePropertyManagementDetails');

element1.addEventListener('click', function () {
  element5.innerText = "Check-In";
  element6.innerText = "Recepção dos hóspedes, entrega das chaves e apresentação da casa e local. Disponibilidade 24 horas.";
});
element2.addEventListener('click', function () {
  element5.innerText = "Limpeza e Lavandaria";
  element6.innerText = "Limpeza da casa e serviço de lavandaria e engomadoria.";
});
element3.addEventListener('click', function () {
  element5.innerText = "Kit de Boas Vindas";
  element6.innerText = "Kit de Boas Vindas ao hóspedes.";
});
element4.addEventListener('click', function () {
  element5.innerText = "Suporte";
  element6.innerText = "Ajuda e acompanhamento em todos os processos burocráticos.";
});

