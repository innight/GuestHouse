// Scroll to specific values
// scrollTo is the same
window.scroll({
  top: 2500,
  left: 0,
  behavior: "smooth",
});

// Scroll certain amounts from current position
window.scrollBy({
  top: 100, // could be negative value
  left: 0,
  behavior: "smooth",
});

//Scroll
ScrollReveal().reveal(".about", { duration: 2000, origin: "bottom" });
ScrollReveal().reveal(".info-left", {
  duration: 2000,
  origin: "left",
  distance: "300px",
  viewFactor: 0.2,
});
ScrollReveal().reveal(".info-right", {
  duration: 2000,
  origin: "right",
  distance: "300px",
  viewFactor: 0.2,
});
ScrollReveal().reveal(".info-top", {
  duration: 2000,
  origin: "top",
  distance: "300px",
  viewFactor: 0.2,
});
