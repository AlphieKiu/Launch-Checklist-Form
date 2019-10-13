function init() {
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