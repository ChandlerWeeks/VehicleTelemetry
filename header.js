document.addEventListener("DOMContentLoaded", function() {
  const vehicleButton = document.getElementById('vehicle-button');
  const mapButton = document.getElementById("map-button");

  mapButton.addEventListener('click', () => {
    location.href = './map.html';
  });

  vehicleButton.addEventListener('click', () => {
    location.href = './vehicles.html';
  });
});