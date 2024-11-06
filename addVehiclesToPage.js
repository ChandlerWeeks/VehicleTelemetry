// addVehiclesToPage.js

// Function to fetch and parse JSON data
async function fetchVehicles() {
  try {
    const response = await fetch('vehicles.json'); // Path to your JSON file
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    console.log(data); // You can now use the JSON data
    addVehiclesToPage(data);
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

// Function to add vehicles to the page
function addVehiclesToPage(data) {
  // Your logic to add vehicles to the page
  console.log(data.companyVehicles);
}

// Call the fetch function
fetchVehicles();