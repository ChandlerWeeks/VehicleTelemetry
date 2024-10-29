document.addEventListener("DOMContentLoaded", function() {
  const vehicleButtons = document.querySelectorAll(".vehicle");
  console.log(vehicleButtons);


  vehicleButtons.forEach(div => {
    console.log("Was good")
    div.addEventListener("click", () => {
      console.log("clicked");
      location.href = "./vehicle.html";
    });
  });
});