

const surferHtmlElement = document.getElementById('surfers');
init();

function init(){
    showSurferData(exampleData);
    
}


// test
// fill the html with surfer data
function showSurferData(data) {
	let windSpeed = data?.wind?.speed || 0; 
	let windDirection = data?.wind?.deg || 0;
	const windSpeedData = document.getElementById("wind-speed-data");
	const windDirectionData = document.getElementById("wind-direction-data");
	windSpeedData.innerText = `${windSpeed} knots`;
	windDirectionData.innerText = `${windDirection}°`;
}



