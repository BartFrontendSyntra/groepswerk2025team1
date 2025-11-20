// elements we need to get data from and put data into
const tomatoHtmlElement = document.getElementById("tomatoes");

function showTomatoData(data) {
        
    let rain = data.rain ? data.rain["1h"] : 0;
    let humidity = data.main.humidity;
    let temp = data.main.temp-273.15; // convert from kelvin to celsius
    temp = Math.round(temp * 10) / 10; // round to 1 decimal place

    const humidityMeter = document.getElementById("humidity-meter");
    const humidityText = document.getElementById("humidity-text");

    humidityMeter.setAttribute("aria-valuenow", humidity);
    humidityMeter.querySelector(".progress-bar").style.width = `${humidity}%`;
    humidityText.innerText = `${humidity}%`;

    const rainMeter = document.getElementById("rain-meter");
    const rainText = document.getElementById("rain-text");
    if (rain === 0) {
        rainMeter.style.display = "none";
    } else {
        rainMeter.style.display = "flex";
        rainMeter.setAttribute("aria-valuenow", rain);
        rainText.innerText = `${rain} mm`;
        rainText.style.height = `${rain * 40}%`;
    }
}
