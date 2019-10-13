function init() {
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        response.json().then(function(json) {
            let index = Math.floor(Math.random() * Math.floor(6));

            let div = document.getElementById("missionTarget")

            div.innerHTML += `
                    <h2>Mission Destination</h2>
                    <ol>
                        <li>Name: ${json[index].name} </li>
                        <li>Diameter: ${json[index].diameter}</li>
                        <li>Star: ${json[index].star}</li>
                        <li>Distance from Earth: ${json[index].distance}</li>
                        <li>Number of Moons: ${json[index].moons}</li>
                    </ol>
                    <img id="planetImage"src="${json[index].image}"> 
                `

        });
    });

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let copilotNameInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        //validation: all fields required
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} is ready for launch.`
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch.`

        if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
            alert("All fields are required!");
            event.preventDefault();
        } else if (isNaN(pilotNameInput.value) !== true || isNaN(copilotNameInput.value) !== true || isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true) {
            alert("Make sure to enter valid number for all fields")
            event.preventDefault();
        } else if (Number(fuelLevelInput.value) < 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`;
            document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
            document.getElementById("launchStatus").style.color = "red";
            event.preventDefault();
        } else if (Number(cargoMassInput.value) > 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("cargoStatus").innerHTML = `Cargo mass too high for launch`;
            document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
            document.getElementById("launchStatus").style.color = "red";
            event.preventDefault();
        } else {
            document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch`;
            document.getElementById("launchStatus").style.color = "Green";
            event.preventDefault();
        }


    });
};

window.onload = init;