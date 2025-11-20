// const { data } = require("framer-motion/client");

const vampireHtmlElement = document.getElementById("vampires");
// show vampire data
function showVampireData(data) {
    // --- SUNRISE ---

    let sunrise = data.sys.sunrise; //`${sunriseHours}:${sunriseMinutes}`;

    // --- SUNSET ---

    let sunset = data.sys.sunset; //`${sunsetHours}:${sunsetMinutes}`;

    // --- CLOUD COVER ---
    let cloudCover = data.clouds.all;

    // Fill in the HTML elements
    document.getElementById("vampire-sunrise").innerText = 
        convertUnixToTime(sunrise);

    document.getElementById("vampire-sunset").innerText =
        convertUnixToTime(sunset);

    document.getElementById("vampire-cloudcover").innerText = `${cloudCover}%`;
}

// convert time to hours and minutes
function convertUnixToTime(timestamp) {
    const date = new Date(timestamp * 1000); // API gives seconds
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
}
