const vampireHtmlElement = document.getElementById("vampires");

function showVampireData(data) {
    // --- SUNRISE ---
    let sunriseTimestamp = data.sys.sunrise;
    let sunriseDate = new Date(sunriseTimestamp * 1000);
    let sunriseHours = sunriseDate.getHours().toString().padStart(2, "0");
    let sunriseMinutes = sunriseDate.getMinutes().toString().padStart(2, "0");
    let sunrise = `${sunriseHours}:${sunriseMinutes}`;

    // --- SUNSET ---
    let sunsetTimestamp = data.sys.sunset;
    let sunsetDate = new Date(sunsetTimestamp * 1000);
    let sunsetHours = sunsetDate.getHours().toString().padStart(2, "0");
    let sunsetMinutes = sunsetDate.getMinutes().toString().padStart(2, "0");
    let sunset = `${sunsetHours}:${sunsetMinutes}`;

    // --- CLOUD COVER ---
    let cloudCover = data.clouds.all; //

    document.getElementById(
        "vampire-sunhours"
    ).innerText = `Sunrise: ${sunrise} | Sunset: ${sunset} | Clouds: ${cloudCover}%`;
}
