document.addEventListener("DOMContentLoaded", function() {
  // Function to get URL parameters
  function getUrlParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    const results = regex.exec(location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  const vehicleId = getUrlParameter("id");
  console.log("Vehicle ID:", vehicleId);

  // Fetch the vehicle JSON data
  fetch("./data/vehicles.json")
    .then((response) => response.json())
    .then((data) => {
      let vehicle = null;
      // Use forEach to find the vehicle with the provided ID
      data.companyVehicles.forEach((v) => {
        if (v.id == vehicleId) {
          vehicle = v;
        }
      });

      if (vehicle) {
        console.log(vehicle); // Log the vehicle data to verify alerts
        // Display the vehicle information
        display_all_information(vehicle);
      } else {
        console.log(`Vehicle with ID ${vehicleId} not found.`);
      }
    })
    .catch((error) => {
      console.log(error);
    });

  // dynamic data for route information
  draw_map(35.149, -90.049);
});

function draw_map(lat, lng) {
    var map = L.map("map").setView(L.latLng(lat, lng), 12);

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
}


function get_vehicle_png(vehicle_make) {
  if (vehicle_make === "Cascadia") {
    return "./assets/images/Single_Semi.png";
  } else if (vehicle_make === "NPR") {
    return "./assets/images/Cabover_Box_Truck.png";
  } else if (vehicle_make === "Box Truck") {
    return "./assets/images/Box_Truck.png";
  } else if (vehicle_make === "Sprinter") {
    return "./assets/images/Asset_2.png";
  } else if (vehicle_make === "F-250") {
    return "./assets/images/F-250.png";
  }
}

function display_car_information(vehicle) {
  const general_info_card = document.getElementById("gen-info");
  general_info_card.innerHTML = `
            <div class="row">
            <div class="col-lg-4">
              <span><h2><b>#${vehicle.id} </b></h2><h2><b>${vehicle.year} ${vehicle.make} ${vehicle.model}</b></h2></span>
            </div>
            <div class="col-lg-8">
              <ul>
                <li>Miles: ${vehicle.miles}</li>
                <li>Avarage Engine Idle Time: 30 hours</li>
                <li>Time in FedEx service: ${vehicle.time_in_service}</li>
                <li>Gasoline: ${vehicle.fuel_level}</li>
                <li>
                  Installed Technology:
                  <ul id='installed-technology-list'></ul>
                </li>
              </ul>
            </div>
          </div>
  `;
  const technology_list = document.getElementById("installed-technology-list");
  vehicle.installed_technology.forEach((tech) => {
    const tech_li = document.createElement("li");
    tech_li.innerText = capitalizeFirstLetter(tech);
    technology_list.appendChild(tech_li);
  });
}

function display_all_information(vehicle) {
  display_alerts(vehicle);
  display_car_information(vehicle);
}

function display_alerts(vehicle) {
  const alert_card = document.getElementById("top-alert");

  if (vehicle.alerts.includes("none")) {
    alert_card.classList.add("hidden");
  } else {
    alert_card.classList.remove("hidden");
    alert_card.classList.add("active");
    alert_card.innerHTML = `<span><b>Alert - ${vehicle.alerts.join(', ')}</b> <br> ${vehicle.alert_date}</span>`;
    if (vehicle.alert_level === "caution") {
      alert_card.classList.add("bg-warning");
    } else if (vehicle.alert_level === "critical") {
      alert_card.classList.add("bg-danger");
    }
  }
}

function display_route_information(vehicle, route) {

}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}