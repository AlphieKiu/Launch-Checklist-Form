function init() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let copilotNameInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
            alert("All fields are required!");
            event.preventDefault();
        }

        if (isNaN(fuelLevelInput.value) !== false) {
            alert("Fuel Level is Not a Number")
            event.preventDefault();
        }

        if (isNaN(cargoMassInput.value) !== false) {
            alert("Cargo Mass is not a number")
            event.preventDefault();
        }
    });

    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        response.json().then(function(json) {
            let div = document.getElementById("comments")
            for (let i = 0; i < json.length; i++) {
                div.innerHTML += `
                
            `
            }
        });
    });
    // Then code code for adding the comment JSON values to the <div id="comments"> div using a for loop
}

window.onload = init;

// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/