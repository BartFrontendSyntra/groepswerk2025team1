const surferHtmlElement = document.getElementById("surfers");

// Converting wind degrees to cardinal directions
function getWindDirection(degrees) {
    // 1. Define the directions in order
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

    // 2. Calculate the index
    // We divide by 45 to get a number between 0 and 8.
    // We use % 8 (modulo) to handle the wrap-around (so 360 becomes 0).
    const index = Math.round(degrees / 45) % 8;

    // 3. Return the text
    return directions[index];
}

// fill the html with surfer data
function showSurferData(data) {
    let windSpeed = data?.wind?.speed || 0; // If data or wind data don't exist, show 0
    let windDirection = data?.wind?.deg || 0;   // If data or wind data don't exist, show 0
    const windSpeedData = document.getElementById("wind-speed-data");
    const windDirectionData = document.getElementById("wind-direction-data");

    // Use the helper function to get the text
    let directionText = getWindDirection(windDirection);

    windSpeedData.innerText = `${windSpeed} knots`;
    windDirectionData.innerText = `${windDirection}° (${directionText})`;
}
