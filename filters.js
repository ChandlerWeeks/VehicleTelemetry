
const vehicleData = [
    {
        "id": 123456,
        "year": 2021,
        "fuel": "electric",
        "fuel_level": "80%",
        "make": "Freightliner",
        "model": "Cascadia",
        "mi": 8000,
        "hrs": 200,
        "in_service": true,
        "time_in_service": "1 year",
        "installed_technology": ["autopilot", "gps", "battery monitoring"],
        "alerts": ["software", "battery"],
        "alert_level": "critical",
        "alert_date": "10/21/2024",
        "coordinates": {
            "latitude": 35.1895,
            "longitude": -90.0430
        }
    },
    {
        "id": 234567,
        "year": 2018,
        "fuel": "hybrid",
        "fuel_level": "8 gal",
        "make": "Ford",
        "model": "F-250",
        "mi": 20000,
        "hrs": 700,
        "in_service": false,
        "time_in_service": "4 years",
        "installed_technology": ["gps"],
        "alerts": ["battery"],
        "alert_level": "critical",
        "alert_date": "10/21/2024",
        "coordinates": {
            "latitude": 35.1200,
            "longitude": -90.0800
        }
    },
    {
        "id": 345678,
        "year": 2020,
        "fuel": "hybrid",
        "fuel_level": "6 gal",
        "make": "Mercedes-Benz",
        "model": "Sprinter",
        "mi": 14000,
        "hrs": 500,
        "in_service": true,
        "time_in_service": "2 years",
        "installed_technology": ["gps", "battery monitoring"],
        "alerts": ["battery"],
        "alert_level": "critical",
        "alert_date": "10/21/2024",
        "coordinates": {
            "latitude": 35.1484,
            "longitude": -90.0680
        }
    },
    {
        "id": 456789,
        "year": 2019,
        "fuel": "gas",
        "fuel_level": "14 gal",
        "make": "Isuzu",
        "model": "NPR",
        "mi": 16000,
        "hrs": 550,
        "in_service": true,
        "time_in_service": "2.5 years",
        "installed_technology": ["gps", "telematics"],
        "alerts": ["oil"],
        "alert_level": "critical",
        "alert_date": "10/21/2024",
        "coordinates": {
            "latitude": 35.1875,
            "longitude": -90.0875
        }
    },
    {
        "id": 567890,
        "year": 2020,
        "fuel": "diesel",
        "fuel_level": "15 gal",
        "make": "Isuzu",
        "model": "Box Truck",
        "mi": 12000,
        "hrs": 400,
        "in_service": true,
        "time_in_service": "2 years",
        "installed_technology": ["gps", "telematics"],
        "alerts": ["oil"],
        "alert_level": "caution",
        "alert_date": "10/21/2024",
        "coordinates": {
            "latitude": 35.1290,
            "longitude": -90.0595
        }
    },
    {
        "id": 678901,
        "year": 2020,
        "fuel": "diesel",
        "fuel_level": "20 gal",
        "make": "Freightliner",
        "model": "Cascadia",
        "mi": 10000,
        "hrs": 300,
        "in_service": true,
        "time_in_service": "1.5 years",
        "installed_technology": ["gps", "engine monitoring"],
        "alerts": ["engine", "tires"],
        "alert_level": "caution",
        "alert_date": "10/21/2024",
        "coordinates": {
            "latitude": 35.1185,
            "longitude": -90.0185
        }
    },
    {
        "id": 789012,
        "year": 2019,
        "fuel": "gas",
        "fuel_level": "12 gal",
        "make": "Ford",
        "model": "F-250",
        "mi": 18000,
        "hrs": 600,
        "in_service": true,
        "time_in_service": "2.5 years",
        "installed_technology": ["gps", "lane assist"],
        "alerts": ["brake pads", "oil"],
        "alert_level": "caution",
        "alert_date": "10/21/2024",
        "coordinates": {
            "latitude": 35.1370,
            "longitude": -90.0970
        }
    },
    {
        "id": 890123,
        "year": 2019,
        "fuel": "diesel",
        "fuel_level": "18 gal",
        "make": "Mercedes-Benz",
        "model": "Sprinter",
        "mi": 22000,
        "hrs": 800,
        "in_service": true,
        "time_in_service": "3 years",
        "installed_technology": ["gps", "telematics"],
        "alerts": ["oil", "tires"],
        "alert_level": "caution",
        "alert_date": "10/21/2024",
        "coordinates": {
            "latitude": 35.1465,
            "longitude": -90.0565
        }
    },
    {
        "id": 901234,
        "year": 2019,
        "fuel": "gas",
        "fuel_level": "10 gal",
        "make": "Isuzu",
        "model": "NPR",
        "mi": 15000,
        "hrs": 550,
        "in_service": true,
        "time_in_service": "3 years",
        "installed_technology": ["gps", "driver assistance"],
        "alerts": ["none"],
        "alert_level": "none",
        "alert_date": "none",
        "coordinates": {
            "latitude": 35.1450,
            "longitude": -90.0450
        }
    },
    {
        "id": 123457,
        "year": 2021,
        "fuel": "electric",
        "fuel_level": "75%",
        "make": "Freightliner",
        "model": "Cascadia",
        "mi": 9000,
        "hrs": 250,
        "in_service": true,
        "time_in_service": "1.5 years",
        "installed_technology": ["gps", "battery monitoring"],
        "alerts": ["none"],
        "alert_level": "none",
        "alert_date": "none",
        "coordinates": {
            "latitude": 35.1445,
            "longitude": -90.0445
        }
    },
    {
        "id": 234568,
        "year": 2021,
        "fuel": "electric",
        "fuel_level": "85%",
        "make": "Ford",
        "model": "F-250",
        "mi": 7000,
        "hrs": 150,
        "in_service": true,
        "time_in_service": "1 year",
        "installed_technology": ["autopilot", "gps"],
        "alerts": ["none"],
        "alert_level": "none",
        "alert_date": "none",
        "coordinates": {
            "latitude": 35.1440,
            "longitude": -90.0440
        }
    },
    {
        "id": 345679,
        "year": 2018,
        "fuel": "diesel",
        "fuel_level": "22 gal",
        "make": "Isuzu",
        "model": "Box Truck",
        "mi": 25000,
        "hrs": 900,
        "in_service": true,
        "time_in_service": "4 years",
        "installed_technology": ["gps", "engine monitoring"],
        "alerts": ["none"],
        "alert_level": "none",
        "alert_date": "none",
        "coordinates": {
            "latitude": 35.1435,
            "longitude": -90.0435
        }
    },
    {
        "id": 456780,
        "year": 2019,
        "fuel": "gas",
        "fuel_level": "16 gal",
        "make": "Mercedes-Benz",
        "model": "Sprinter",
        "mi": 20000,
        "hrs": 700,
        "in_service": true,
        "time_in_service": "3 years",
        "installed_technology": ["gps", "lane assist"],
        "alerts": ["none"],
        "alert_level": "none",
        "alert_date": "none",
        "coordinates": {
            "latitude": 35.1430,
            "longitude": -90.0430
        }
    },
    {
        "id": 567891,
        "year": 2020,
        "fuel": "hybrid",
        "fuel_level": "7 gal",
        "make": "Isuzu",
        "model": "NPR",
        "mi": 13000,
        "hrs": 450,
        "in_service": true,
        "time_in_service": "2 years",
        "installed_technology": ["gps", "battery monitoring"],
        "alerts": ["none"],
        "alert_level": "none",
        "alert_date": "none",
        "coordinates": {
            "latitude": 35.1425,
            "longitude": -90.0425
        }
    },
    {
        "id": 678902,
        "year": 2021,
        "fuel": "electric",
        "fuel_level": "90%",
        "make": "Freightliner",
        "model": "Cascadia",
        "mi": 6000,
        "hrs": 100,
        "in_service": true,
        "time_in_service": "1 year",
        "installed_technology": ["autopilot", "gps"],
        "alerts": ["none"],
        "alert_level": "none",
        "alert_date": "none",
        "coordinates": {
            "latitude": 35.1420,
            "longitude": -90.0420
        }
    },
    {
        "id": 789013,
        "year": 2017,
        "fuel": "diesel",
        "fuel_level": "25 gal",
        "make": "Isuzu",
        "model": "Box Truck",
        "mi": 30000,
        "hrs": 1000,
        "in_service": true,
        "time_in_service": "5 years",
        "installed_technology": ["gps", "telematics"],
        "alerts": ["none"],
        "alert_level": "none",
        "alert_date": "none",
        "coordinates": {
            "latitude": 35.1415,
            "longitude": -90.0415
        }
    },
    {
        "id": 890124,
        "year": 2019,
        "fuel": "gas",
        "fuel_level": "11 gal",
        "make": "Ford",
        "model": "F-250",
        "mi": 17000,
        "hrs": 600,
        "in_service": true,
        "time_in_service": "2.5 years",
        "installed_technology": ["gps", "lane assist"],
        "alerts": ["none"],
        "alert_level": "none",
        "alert_date": "none",
        "coordinates": {
            "latitude": 35.1410,
            "longitude": -90.0410
        }
    },
    {
        "id": 901235,
        "year": 2020,
        "fuel": "hybrid",
        "fuel_level": "9 gal",
        "make": "Isuzu",
        "model": "NPR",
        "mi": 15000,
        "hrs": 500,
        "in_service": true,
        "time_in_service": "2 years",
        "installed_technology": ["gps", "battery monitoring"],
        "alerts": ["none"],
        "alert_level": "none",
        "alert_date": "none",
        "coordinates": {
            "latitude": 35.1405,
            "longitude": -90.0405
        }
    },
    {
        "id": 123458,
        "year": 2021,
        "fuel": "electric",
        "fuel_level": "70%",
        "make": "Freightliner",
        "model": "Cascadia",
        "mi": 10000,
        "hrs": 300,
        "in_service": true,
        "time_in_service": "1.5 years",
        "installed_technology": ["autopilot", "gps"],
        "alerts": ["none"],
        "alert_level": "none",
        "alert_date": "none",
        "coordinates": {
            "latitude": 35.1400,
            "longitude": -90.0400
        }
    },
    {
        "id": 234569,
        "year": 2020,
        "fuel": "diesel",
        "fuel_level": "19 gal",
        "make": "Isuzu",
        "model": "Box Truck",
        "mi": 12000,
        "hrs": 400,
        "in_service": true,
        "time_in_service": "2 years",
        "installed_technology": ["gps", "engine monitoring"],
        "alerts": ["none"],
        "alert_level": "none",
        "alert_date": "none",
        "coordinates": {
            "latitude": 35.1395,
            "longitude": -90.0395
        }
    }
];

function filterVehicles(searchTerm, vehicles) {
    return vehicles.filter(vehicle => {
        const searchLower = searchTerm.toLowerCase();

        return (
            vehicle.make.toLowerCase().includes(searchLower) ||
            vehicle.model.toLowerCase().includes(searchLower) ||
            vehicle.year.toString().includes(searchLower) ||
            vehicle.fuel.toLowerCase().includes(searchLower) ||
            vehicle.fuel_level.toLowerCase().includes(searchLower) ||
            vehicle.mi.toString().includes(searchLower) ||
            vehicle.hrs.toString().includes(searchLower) ||
            vehicle.installed_technology.some(tech => tech.toLowerCase().includes(searchLower)) ||
            vehicle.alerts.some(alert => alert.toLowerCase().includes(searchLower)) ||
            vehicle.alert_level.toLowerCase().includes(searchLower)
        );
    });
}

// Function to render filtered vehicles
function renderVehicles(vehicles) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ''; // Clear previous results

    if (vehicles.length === 0) {
        resultsContainer.innerHTML = '<p>No vehicles found.</p>';
        return;
    }

    vehicles.forEach(vehicle => {
        const vehicleDiv = document.createElement('div');
        vehicleDiv.classList.add('vehicle-item');
        vehicleDiv.innerHTML = `
            <h3>${vehicle.make} ${vehicle.model} (${vehicle.year})</h3>
            <p>Fuel: ${vehicle.fuel} | Fuel Level: ${vehicle.fuel_level}</p>
            <p>Mileage: ${vehicle.mi} miles | Hours: ${vehicle.hrs}</p>
            <p>Technology: ${vehicle.installed_technology.join(', ')}</p>
            <p>Alerts: ${vehicle.alerts.join(', ')}</p>
        `;
        resultsContainer.appendChild(vehicleDiv);
    });
}

// Listen for input changes in the search bar
const searchInput = document.getElementById("search-bar");
searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value;
    const filteredVehicles = filterVehicles(searchTerm, vehicleData);
    renderVehicles(filteredVehicles);
});
