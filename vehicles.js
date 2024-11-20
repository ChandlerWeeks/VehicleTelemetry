// Fetch the JSON data
fetch("./data/vehicles.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    addVehiclesToPage(data.companyVehicles); // Pass the JSON data to the function
  })
  .catch((error) => {
    console.log(error);
  });

// Function to create and add vehicle divs to the page
function addVehiclesToPage(vehicles) {
  const vehicleContainer = document.getElementById("vehicles-container");

  vehicles.forEach((vehicle) => {
    // process data for the card
    if (vehicle.in_service) {
      in_service = "Yes";
    } else {
      in_service = "No";
    }

    if (vehicle.alerts.length === 0) {
      console.log("No alerts");
    } else if (vehicle.alerts.length === 1) {
      console.log("one alert");
    } else {
      console.log("several alerts");
    }
    const vehicleDiv = document.createElement("div");
    vehicleDiv.classList.add("vehicle");
    vehicleDiv.id = `vehicle${vehicle.id}`;
    vehicleDiv.innerHTML = `
      <div class="vehicle-frame vehicle-frame-error">
        <div class="error-frame">
          <p class="alert-text">Brakes - 10/21/2024</p>
        </div>
        <p class='card-description'><strong>${vehicle.year} ${vehicle.make} ${vehicle.model}</strong></p>
        <p class='card-description'><strong>In Service: ${in_service}</strong></p>
      </div>
    `;
    vehicleContainer.appendChild(vehicleDiv);

    const vehicleButtons = document.querySelectorAll(".vehicle");

    vehicleButtons.forEach((div) => {
      div.addEventListener("click", () => {
        location.href = "./vehicle.html";
      });
    });
  });
}
