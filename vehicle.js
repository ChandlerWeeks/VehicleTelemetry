document.addEventListener("DOMContentLoaded", function() {
  var map = L.map('map').setView(L.latLng(35.149, -90.049), 12);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // add a custom marker
  var vehicleSilhoute = L.icon({
    iconUrl: "assets/images/Asset_2.png",
    iconSize: [50, 30],
  });
  L.marker([35.149, -90.049], { icon: vehicleSilhoute }).addTo(map);
});