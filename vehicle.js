document.addEventListener("DOMContentLoaded", function() {
  // Function to get URL parameters
  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }

  const vehicleId = getUrlParameter('id');
  console.log('Vehicle ID:', vehicleId);

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
        display_all_information(vehicle);
      } else {
        console.log(`Vehicle with ID ${vehicleId} not found.`);
      }
    })
    .catch((error) => {
      console.log(error);
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
    L.marker([lat, lng], { icon: vehicleSilhoute }).addTo(map);
  }

  function draw_default_map() {
    var map = L.map("map").setView(L.latLng(39.823, -98.579), 4);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
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
    display_undated_information(vehicle);
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
    const route_card = document.getElementById("route-info");
    route_card.innerHTML = `
      <div class="row"> 
        <div class="col-lg-6"> 
          <div id="info">
            <h4>Drive Information</h4>
            <div class="form-group row" id="date-select">
              <label for="date" class="col-form-label col-sm-2">Select Date:</label>
              <div class="col-sm-10">
                <input type="date" id="date" name="date" class="form-control" value=${route.date}>
              </div>
            </div>
            <hr>
            <div class="row">
              <div>
                <ul style="list-style-type: none;">
                  <li>Courier ID: ${route.courier_id}</li>
                  <li>Courier Name: ${route.courier_name}</li>
                  <li>Route Number: ${route.route_id}</li>
                  <li>Station Departure Time: ${military_time_to_AMPM(route.station_departure_time)}</li>
                  <li>Station Return Time: ${military_time_to_AMPM(route.station_return_time)}</li>
                </ul>
              </div>
              <div>
                <ul style="list-style-type: none;">
                  <li>Miles Traveled: ${route.miles_traveled}</li>
                  <li>Total Idle Time: ${hours_minutes_to_string(route.total_idle_time)}</li>
                  <li>Average Stop Time: ${hours_minutes_to_string(route.average_stop_time)}</li>
                  <li>Total Stop Time: ${hours_minutes_to_string(route.total_stop_time)}</li>
                </ul>
              </div>
            </div>        
          </div>
          <h4 class="pt-2">Stop Record</h4>
          <hr>
          <div id="table">
            <table id="table-contents" class="table-striped table-bordered table-responsive table-hover">
              <thead>
                <tr>
                  <th class="px-4">Time Stopped</th>
                  <th class="px-4">Time Left</th>
                  <th class="px-4">Previous Time Stop</th>
                  <th class="px-4">Location</th>
                </tr>
              </thead>
              <tbody id="stops-table-body">
                <!-- Stops will be dynamically added here -->
              </tbody>
            </table>            
          </div>
        </div>
        <div class="col-lg-6">
          <div id="map"></div>
        </div>
      </div>
    `;

    const stopsTableBody = document.getElementById("stops-table-body");
    stopsTableBody.innerHTML = ""; // Clear existing rows

    route.stops.forEach((stop) => {
      const row = document.createElement("tr");
      stop.forEach((cell) => {
        const cellElement = document.createElement("td");
        cellElement.textContent = cell;
        row.appendChild(cellElement);
      });
      stopsTableBody.appendChild(row);
    });

    initilaize_date_field(vehicle);

    // Reinitialize the map
    draw_map(vehicle.coordinates.latitude, vehicle.coordinates.longitude);
  }

  function initilaize_date_field(vehicle) {
    const dateInput = document.getElementById("date");
    dateInput.addEventListener("change", function () {
      const date = dateInput.value;
      const vehicle_id = vehicle.id;
      fetch("./data/routes.json")
        .then((response) => response.json())
        .then((data) => {
          const route = data.routes.find(
            (r) => r.vehicle_id == vehicle_id && r.date == date
          );
          if (route) {
            display_route_information(vehicle, route);
          } else {
            display_date_error();
          }
        })
        .catch((error) => {
          console.error(error);
          return null;
        });
    });
  }

  function display_undated_information(vehicle) {
    const route_card = document.getElementById("route-info");
    route_card.innerHTML = `
      <h2 style="text-align:center;"><b>Route Information</b></h2>
      <div class="row"> 
        <div class="col-lg-6"> 
          <div id="info">
            <h4>Drive Information</h4>
            <div class="form-group row" id="date-select">
              <label for="date" class="col-form-label col-sm-2">Select Date:</label>
              <div class="col-sm-10">
                <input type="date" id="date" name="date" class="form-control">
              </div>
            </div>
          </div>
          <p class='date-information'>Select a date to see its route</p>
        </div>
        <div class="col-lg-6">
          <div id="map"></div>
        </div>
      </div>
    `;
    initilaize_date_field(vehicle);
    draw_default_map();
  }

  function display_date_error() {
    console.log("Date not found");
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function military_time_to_AMPM(time) {
    let [hours, minutes] = time.split(':');
    hours = parseInt(hours);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    return `${hours}:${minutes} ${ampm}`;
  }

  function hours_minutes_to_string(time) {
    let [hours, minutes] = time.split(":");
    hours = parseInt(hours);
    minutes = parseInt(minutes);
    return `${hours} hours, ${minutes} minutes`;
  }
});