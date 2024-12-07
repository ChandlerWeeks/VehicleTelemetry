document.addEventListener("DOMContentLoaded", function () {
    var map = L.map("map").setView(L.latLng(35.149, -90.049), 12);
  
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
  
    fetch("./data/vehicles.json")
      .then((response) => response.json())
      .then((data) => {
        data.companyVehicles.forEach((vehicle) => {
          var vehicleIcon = L.icon({
            iconUrl: "assets/images/Asset_2.png",
            iconSize: [50, 30],
          });
  
          const marker = L.marker(
            [vehicle.coordinates.latitude, vehicle.coordinates.longitude],
            { icon: vehicleIcon }
          )
            .addTo(map)
            .bindPopup(
              `<b>${vehicle.year} ${vehicle.make} ${vehicle.model}</b><br>
              Miles: ${vehicle.mi}<br>
              Fuel Level: ${vehicle.fuel_level}<br>
              Alerts: ${
                vehicle.alerts.join(", ")
              }<br>
              Alert Level: ${vehicle.alert_level}<br>
              In Service: ${vehicle.in_service ? "Yes" : "No"}<br>
              Time in Service: ${vehicle.time_in_service}<br>
              <button class="view-details-btn" data-id="${vehicle.id}">View Details</button>`
            );
  
          marker.on("popupopen", function () {
            document.querySelectorAll(".view-details-btn").forEach((btn) => {
              btn.addEventListener("click", (event) => {
                const vehicleId = event.target.getAttribute("data-id");
                location.href = `./vehicle.html?id=${vehicleId}`;
              });
            });
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });
  