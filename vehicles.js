// Fetch the JSON data
fetch("./data/vehicles.json")
  .then((response) => response.json())
  .then((data) => {
    addVehiclesToPage(data.companyVehicles); // Pass the JSON data to the function
  })
  .catch((error) => {
    console.log(error);
  });

// Function to create and add vehicle divs to the page
function addVehiclesToPage(vehicles) {
  const vehicleContainer = document.getElementById("card-container");

  vehicles.forEach((vehicle) => {
    // define data
    var in_service;
    var alert_color;
    var bg_color;
    var warning_text;

    // process data for the card
    if (vehicle.in_service) {
      in_service = "Yes";
    } else {
      in_service = "No";
    }

    // Process the alert coloration and message
    if (vehicle.alert_level == "none") {
      alert_color = "border-secondary";
      bg_color = "bg-secondary";
      warning_text = "No Issues";
    } else if (vehicle.alert_level == "caution") {
      alert_color = "border-warning";
      bg_color = "bg-warning";
      warning_text =
        vehicle.alerts.length > 1
          ? "Multiple Warnings"
          : `Warning - ${vehicle.alerts[0]}`;
    } else if (vehicle.alert_level == "critical") {
      alert_color = "border-danger";
      bg_color = "bg-danger";
      warning_text =
        vehicle.alerts.length > 1
          ? "Multiple Failures"
          : `Failure - ${vehicle.alerts[0]}`;
    }

    // Create the card div
    const vehicleDiv = document.createElement("div");
    vehicleDiv.classList.add("card", "text-center", alert_color);
    vehicleDiv.style.maxWidth = "16rem";
    vehicleDiv.id = `vehicle${vehicle.id}`;
    vehicleDiv.innerHTML = `
    <div class="card-header ${bg_color} text-white">${warning_text}</div>
    <div class="card-body">
      <h5 class="card-title car-make-model">${vehicle.year} ${vehicle.make} ${vehicle.model}</h5>
      <img class="card-img-top" src="./assets/images/Asset_2.png" alt="Card image cap">
    </div>
  `;
    vehicleContainer.appendChild(vehicleDiv);

    const vehicleButtons = document.querySelectorAll(".card");

    vehicleButtons.forEach((div) => {
      div.addEventListener("click", () => {
        location.href = "./vehicle.html";
      });
    });
  });
}
