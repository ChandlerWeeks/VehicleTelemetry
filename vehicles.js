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
    console.log("working kinda");
    const vehicleDiv = document.createElement("div");
    vehicleDiv.classList.add("vehicle");
    vehicleDiv.id = `vehicle${vehicle.id}`;
    vehicleDiv.innerHTML = `
      <div class="vehicle-frame vehicle-frame-error">
        <div class="error-frame">
          <p class="alert-text">Brakes - 10/21/2024</p>
        </div>
        <div class="vehicle-silhouette">
          <svg class="small-svg" id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 377.6 159.02">
            <defs>
              <style>
                .cls-1 {
                  fill: #474747;
                }
              </style>
            </defs>
            <g id="Layer_2-2" data-name="Layer_2">
              <path class="cls-1" d="M6.37,2.63c-2.18,1.57-2.47,5.1-2.28,7.97,0,4.06,0,9.85,0,16.71,0,30.27,0,81.38,0,96.38.27,3-1.55,4.79-3.14,7.07-2.48,3.45.31,5.25,4.28,5.93,6.51.93,13.72.48,20.32.09,5.76-.47,8.74-1.23,14.62-1.54,4.26-.23,8.36-.13,12.73-.15,4.42,0,9.41,0,13.71,0,4.31.09,7.05-.26,10.31,1.27,3.12,1.87,3.09,5.56,5.01,10.39,4.19,12.68,20.82,15.32,31.26,8.86,3.71-2.37,6.09-6.71,8.05-9.86,1.67-2.71,2.74-4.43,4.18-5.18,21.69-1.25,143.95-.19,168.6-.4,1.06.16,1.7.64,2.29,1.55,1.16,1.69,2.11,5.12,5.12,8.62,4.68,5.8,12.14,8.05,19.67,8.41,8.19.28,16.24-3.33,19.77-11.04,2.31-4.34,2.91-8.75,5.45-11.13,2.76-2.48,6.21-2.63,10.02-2.89,4.09-.16,9.24-.01,13.13-.33,8.93-.42,9.15-7.2,7.1-14.03-1.14-4.57-2.57-8.22-3.06-14.61-.38-5.64-.16-12.09-.73-17.56-.42-7.9-8.37-8.92-14.8-11.58-4.83-1.8-9.89-3.57-14.62-5.43-4.68-1.72-6.92-3.54-9.45-7.89-1.92-3.1-3.73-6.17-5.7-9.37-8.82-14.22-18.4-31.08-27.36-44.6-2.38-3.06-4.18-4.27-5.87-4.83-22.14-1.68-136.02-1.42-216.32-2.78C46.15.34,21.01.07,13.81,0c-2.6.03-5.18.88-7.38,2.58l-.06.05Z"/>
              <text x="48%" y="55%" class="number">${vehicle.id}</text>
            </g>
          </svg>
        </div>
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