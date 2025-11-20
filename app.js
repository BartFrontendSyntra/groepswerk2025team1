// elements we need to get data from and put data into
const searchLocationHtmlElement = document.getElementById("search-location");
const searchButtonHtmlElement = document.getElementById("search-button");

// add listeners
searchButtonHtmlElement.addEventListener("click", (event) => {
    event.preventDefault();
    const location = searchLocationHtmlElement.value;
    searchWeather(location);
});

init();

function init() {
    searchWeather("T2 campus");
}

function searchWeather(location) {
    const searchLocationLink = `https://nominatim.openstreetmap.org/search?q=${location}&format=json`;

    //search for location information, not weather data yet!
    fetch(searchLocationLink)
        .then((res) => res.json())
        .then((data) => searchWeatherData(data))
        .catch((error) =>
            console.error("Error fetching location data:", error)
        );
}

function searchWeatherData(locationData) {
    //show what city we are in and other global information
    showLocation(locationData);

    //fetch weather data for the location
    let lat = locationData[0].lat;
    let lon = locationData[0].lon;
    const searchLink = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(searchLink)
        .then((res) => res.json())
        .then((data) => showWeatherData(data))
        .catch((error) => console.error("Error fetching weather data:", error));
}

function showWeatherData(data) {
    showTomatoData(data);
    showSurferData(data);
    showVampireData(data);
}

function showLocation(data) {
    const locationHtmlElement = document.getElementById("location");
    locationHtmlElement.innerText = `weather for: ${data[0].display_name}`;
}
