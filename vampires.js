const otherExampleData = {
   "coord": {
      "lon": 7.367,
      "lat": 45.133
   },
   "weather": [
      {
         "id": 501,
         "main": "Rain",
         "description": "moderate rain",
         "icon": "10d"
      }
   ],
   "base": "stations",
   "main": {
      "temp": 284.2,
      "feels_like": 282.93,
      "temp_min": 283.06,
      "temp_max": 286.82,
      "pressure": 1021,
      "humidity": 60,
      "sea_level": 1021,
      "grnd_level": 910
   },
   "visibility": 10000,
   "wind": {
      "speed": 4.09,
      "deg": 121,
      "gust": 3.47
   },
   "rain": {
      "1h": 2.73
   },
   "clouds": {
      "all": 83
   },
   "dt": 1726660758,
   "sys": {
      "type": 1,
      "id": 6736,
      "country": "IT",
      "sunrise": 1726636384,
      "sunset": 1726680975
   },
   "timezone": 7200,
   "id": 3165523,
   "name": "Province of Turin",
   "cod": 200
};

const vampireHtmlElement = document.getElementById('vampires');
init();

function init() {
    showVampireData(otherExampleData);
}

function showVampireData(data) {

    // --- SUNRISE ---
    let sunriseTimestamp = data.sys.sunrise;
    let sunriseDate = new Date(sunriseTimestamp * 1000);
    let sunriseHours = sunriseDate.getHours().toString().padStart(2, '0');
    let sunriseMinutes = sunriseDate.getMinutes().toString().padStart(2, '0');
    let sunrise = `${sunriseHours}:${sunriseMinutes}`;

    // --- SUNSET ---
    let sunsetTimestamp = data.sys.sunset;
    let sunsetDate = new Date(sunsetTimestamp * 1000);
    let sunsetHours = sunsetDate.getHours().toString().padStart(2, '0');
    let sunsetMinutes = sunsetDate.getMinutes().toString().padStart(2, '0');
    let sunset = `${sunsetHours}:${sunsetMinutes}`;

    // --- CLOUD COVER ---
    let cloudCover = data.clouds.all;   // 

    document.getElementById("vampire-sunhours").innerText =
        `Sunrise: ${sunrise} | Sunset: ${sunset} | Clouds: ${cloudCover}%`;
}
