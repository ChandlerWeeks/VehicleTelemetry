document.addEventListener("DOMContentLoaded", function() {
  const vehicleButton = document.getElementById('vehicle-button');
  /*const mapButton = document.getElementById("map-button");
  const hamburger = document.getElementById("hamburger");

  mapButton.addEventListener('click', () => {
    location.href = './map.html';
  });

  vehicleButton.addEventListener('click', () => {
    location.href = './vehicles.html';
  });
  */

  hamburger.addEventListener('click', () => {
    const mainContent = document.getElementById('main-content');
    const nav = document.getElementById('sidebar');
    nav.classList.toggle('visible');
    mainContent.classList.toggle('shifted');
  });
});