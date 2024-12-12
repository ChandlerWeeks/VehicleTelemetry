document.addEventListener("DOMContentLoaded", function () {
  var map = L.map("map").setView(L.latLng(35.149, -90.049), 12);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  let allVehicles = [];

  // Fetch vehicle data
  fetch("./data/vehicles.json")
    .then((response) => response.json())
    .then((data) => {
      allVehicles = data.companyVehicles;
      addVehiclesToMap(allVehicles);
    })
    .catch((error) => {
      console.error("Error loading vehicles data:", error);
    });

  // Function to add vehicles to the map
  function addVehiclesToMap(vehicles) {
    map.eachLayer(function (layer) {
      if (layer instanceof L.Marker) map.removeLayer(layer);
    });

    vehicles.forEach((vehicle) => {
      var vehicleIcon = L.icon({
        iconUrl: get_vehicle_png(vehicle),
        iconSize: [50, 30],
      });

      const marker = L.marker(
        [vehicle.coordinates.latitude, vehicle.coordinates.longitude],
        { icon: vehicleIcon }
      )
        .addTo(map)
        .bindPopup(
          `<b> Vehicle #${vehicle.id}<br>
          ${vehicle.year} ${vehicle.make} ${vehicle.model}</b><br>
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
    });

    // Use event delegation to handle button clicks
    map.on("popupopen", function (e) {
      const popup = e.popup.getElement();
      popup
        .querySelector(".view-details-btn")
        .addEventListener("click", (event) => {
          const vehicleId = event.target.getAttribute("data-id");
          location.href = `./vehicle.html?id=${vehicleId}`;
        });
    });
  }

  // Apply filters to vehicles
  function applyFiltersToVehicles() {
    const selectedFilters = getSelectedFilters();
    const filteredVehicles = allVehicles.filter((vehicle) => {
      return (
        (selectedFilters.alert_type.length === 0 ||
          selectedFilters.alert_type.some((alert) =>
            vehicle.alerts.includes(alert)
          )) &&
        (selectedFilters.time_in_service.length === 0 ||
          selectedFilters.time_in_service.includes(vehicle.time_in_service)) &&
        (selectedFilters.installed_technology.length === 0 ||
          selectedFilters.installed_technology.some((tech) =>
            vehicle.installed_technology.includes(tech)
          )) &&
        (Object.keys(selectedFilters.make).length === 0 ||
          (selectedFilters.make[vehicle.make] &&
            selectedFilters.make[vehicle.make].includes(vehicle.model)))
      );
    });
    addVehiclesToMap(filteredVehicles);
  }

  // Retrieve selected filters
  function getSelectedFilters() {
    const selectedFilters = {
      alert_type: Array.from(
        document.querySelectorAll("#alert-type input:checked")
      ).map((input) => input.value),
      make: {},
      time_in_service: Array.from(
        document.querySelectorAll("#time-in-service input:checked")
      ).map((input) => input.value),
      installed_technology: Array.from(
        document.querySelectorAll("#installed-technology input:checked")
      ).map((input) => input.value),
    };

    document.querySelectorAll("#make > div").forEach((makeDiv) => {
      const makeElement = makeDiv.querySelector("strong");
      if (makeElement) {
        const make = makeElement.innerText;
        const modelList = makeDiv.nextElementSibling;
        if (modelList) {
          const selectedModels = Array.from(
            modelList.querySelectorAll("input:checked")
          ).map((input) => input.value);
          if (selectedModels.length > 0) {
            selectedFilters.make[make] = selectedModels;
          }
        }
      }
    });

    return selectedFilters;
  }

  // Add event listener for filter changes
  const filtersElement = document.getElementById("filters");
  if (filtersElement) {
    filtersElement.addEventListener("change", function () {
      applyFiltersToVehicles();
    });
  }

  // Function to get the appropriate vehicle icon URL
  function get_vehicle_png(vehicle) {
    switch (vehicle.model) {
      case "Cascadia":
        return "./assets/images/Single_Semi.png";
      case "NPR":
        return "./assets/images/Cabover_Box_Truck.png";
      case "Box Truck":
        return "./assets/images/Box_Truck.png";
      case "Sprinter":
        return "./assets/images/Asset_2.png";
      case "F-250":
        return "./assets/images/Pickup_Truck.png";
      default:
        return "./assets/images/Asset_2.png"; // Fallback for unknown makes
    }
  }
});
