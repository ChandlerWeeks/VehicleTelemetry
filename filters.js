document.addEventListener("DOMContentLoaded", function() {
  // Fetch the filters JSON data and display the filters
  display_default_filters();

  // Add event listener to the search bar to trigger on input
  const searchBar = document.getElementById("filters-search");
  searchBar.addEventListener("input", function(event) {
    const searchTerm = event.target.value.toLowerCase();
    get_filtered_filters(searchTerm);
  });
});

let filtersData = {};

function display_default_filters() {
  fetch("./data/filters.json")
    .then((response) => response.json())
    .then((data) => {
      filtersData = data;
      addFiltersToPage(data); // Pass the JSON data to the function
    })
    .catch((error) => {
      console.log(error);
    });
}

function get_filtered_filters(searchTerm) {
  const filteredData = {
    alert_type: filtersData.alert_type.filter((alert) =>
      alert.toLowerCase().includes(searchTerm)
    ),
    make: {},
    time_in_service: filtersData.time_in_service.filter((time) =>
      time.toLowerCase().includes(searchTerm)
    ),
    installed_technology: filtersData.installed_technology.filter((tech) =>
      tech.toLowerCase().includes(searchTerm)
    ),
  };

  Object.keys(filtersData.make).forEach((make) => {
    if (make.toLowerCase().includes(searchTerm)) {
      filteredData.make[make] = filtersData.make[make];
    } else {
      const filteredModels = filtersData.make[make].filter((model) =>
        model.toLowerCase().includes(searchTerm)
      );
      if (filteredModels.length > 0) {
        filteredData.make[make] = filteredModels;
      }
    }
  });

  addFiltersToPage(filteredData);
}

function addFiltersToPage(filters) {
  // Clear existing filters
  document.getElementById("alert-type").innerHTML = "";
  document.getElementById("make").innerHTML = "";
  document.getElementById("time-in-service").innerHTML = "";
  document.getElementById("installed-technology").innerHTML = "";

  // Add alert type filters
  const alertTypeContainer = document.getElementById("alert-type");
  if (filters.alert_type.length > 0) {
    alertTypeContainer.style.display = "block";
    filters.alert_type.forEach((alert) => {
      const label = document.createElement("label");
      label.innerHTML = `<input type="checkbox" value="${alert}"> ${alert}`;
      alertTypeContainer.appendChild(label);
    });
  } else {
    alertTypeContainer.style.display = "none";
  }

  // Add make and model filters
  const makeContainer = document.getElementById("make");
  if (Object.keys(filters.make).length > 0) {
    makeContainer.style.display = "block";
    Object.keys(filters.make).forEach((make) => {
      const makeLabel = document.createElement("div");
      makeLabel.innerHTML = `<strong>${make}</strong>`;
      makeContainer.appendChild(makeLabel);

      const modelList = document.createElement("div");
      modelList.classList.add("model-list");
      filters.make[make].forEach((model) => {
        const modelLabel = document.createElement("label");
        modelLabel.innerHTML = `<input type="checkbox" value="${model}"> ${model}`;
        modelList.appendChild(modelLabel);
      });
      makeContainer.appendChild(modelList);
    });
  } else {
    makeContainer.style.display = "none";
  }

  // Add time in service filters
  const timeInServiceContainer = document.getElementById("time-in-service");
  if (filters.time_in_service.length > 0) {
    timeInServiceContainer.style.display = "block";
    filters.time_in_service.forEach((time) => {
      const label = document.createElement("label");
      label.innerHTML = `<input type="checkbox" value="${time}"> ${time}`;
      timeInServiceContainer.appendChild(label);
    });
  } else {
    timeInServiceContainer.style.display = "none";
  }

  // Add installed technology filters
  const installedTechnologyContainer = document.getElementById("installed-technology");
  if (filters.installed_technology.length > 0) {
    installedTechnologyContainer.style.display = "block";
    filters.installed_technology.forEach((tech) => {
      const label = document.createElement("label");
      label.innerHTML = `<input type="checkbox" value="${tech}"> ${tech}`;
      installedTechnologyContainer.appendChild(label);
    });
  } else {
    installedTechnologyContainer.style.display = "none";
  }
}