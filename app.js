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
    let lastLocations = getLastSearchedLocations();
    if(lastLocations.length > 0){
        searchWeather(lastLocations[lastLocations.length -1]);
        return;
    }
    searchWeather("T2 campus");
}
// fetch weather data for the rough location name
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

/**
 *  Fetch weather data based on location data
 * @param {*} locationData - location data fetched from nominatim api, JSON format
 */
function searchWeatherData(locationData) {
    //show what city we are in and other global information
    showLocation(locationData);
    saveLastSearchedLocation(locationData[0].display_name);

    //fetch weather data for the location
    let lat = locationData[0].lat;
    let lon = locationData[0].lon;
    const searchLink = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(searchLink)
        .then((res) => res.json())
        .then((data) => showWeatherData(data))
        .catch((error) => console.error("Error fetching weather data:", error));
}
// show all weather data in respective sections
function showWeatherData(data) {
    showTomatoData(data);
    showSurferData(data);
    showVampireData(data);
}
// show location information in html
function showLocation(data) {
    const locationHtmlElement = document.getElementById("location");
    locationHtmlElement.innerText = `weather for: ${data[0].display_name}`;
}

// get the 5 last searched locations from local storage in 
function getLastSearchedLocations(){
    return localStorage.getItem("lastSearchedLocations") ? JSON.parse(localStorage.getItem("lastSearchedLocations")) : [];
}

function saveLastSearchedLocation(location){
    let locations = getLastSearchedLocations();
    if(!locations.includes(location)){
        locations.push(location);
        if(locations.length > 5){
            locations.shift();
        }
        localStorage.setItem("lastSearchedLocations", JSON.stringify(locations));
    }
}