const exampleData = {
			"dt": 1763564400,
			"main": {
				"temp": 277.84,
				"feels_like": 274.33,
				"temp_min": 277.84,
				"temp_max": 277.98,
				"pressure": 1002,
				"sea_level": 1002,
				"grnd_level": 993,
				"humidity": 91,
				"temp_kf": -0.14
			},
			"weather": [
				{
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10d"
				}
			],
			"clouds": {
				"all": 100
			},
			"wind": {
				"speed": 4.54,
				"deg": 216,
				"gust": 8.52
			},
			"visibility": 10000,
			"pop": 0.66,
			"rain": {
				"3h": 0.33
			},
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2025-11-19 15:00:00"
		};

const vampireHtmlElement = document.getElementById('vampires');
init();

function init(){
	showVampireData(exampleData);
}