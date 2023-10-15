// Displays the concentration levels of the pollutants in the city entered by the user
function displayConcentrationLevel(city) {
	// Get the data from the Air Quality Index by API-Ninjas API
	const url = `https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=${city}`;
	const options = {
		method: "GET",
		headers: {
		"X-RapidAPI-Key": "4141fa634emsh91338397febc5b7p12ab65jsn58b2ed9949dc",
		"X-RapidAPI-Host": "air-quality-by-api-ninjas.p.rapidapi.com",
		},
	};

	(async () => {
		try {
			// Get the response from the API as a JSON object
			const response = await fetch(url, options);
			let result = await response.json();
			let arr = [];
			// Go through the JSON object and get the concentrations of the pollutants into an array
			for (var key in result) {
				// If an invalid city name is entered, display an error message
				if (key == 'error') {
					alert("Please enter a valid city name!");
					return;
				}

				var conc = result[key];
				console.log(conc);

				for (var con in conc) {
				arr.push(conc[con]);
				}
			}

			// Capitalize the first letter of each word in the city name
			new_city = ''
			city_array = city.split(' ');
			for (city in city_array){
				new_city = new_city.concat(city_array[city][0].toUpperCase(), city_array[city].slice(1, ), ' ')
			}
			
			// Set the HTML elements to the values from the API
			name1.innerHTML = new_city;
			co.innerHTML = arr[0];
			no2.innerHTML = arr[2];
			o3.innerHTML = arr[4];
			so2.innerHTML = arr[6];
			pm25.innerHTML = arr[8];
			pm10.innerHTML = arr[10];
		} catch (error) {
			// Print an error if one occurs
			console.error(error);
		}
	})();
}

// Displays the concentration levels of the pollutants in the cities in the table
function displayConcentrationLevelTable(city) {
	const url = `https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=${city}`;
	const options = {
		method: "GET",
		headers: {
		"X-RapidAPI-Key": "4141fa634emsh91338397febc5b7p12ab65jsn58b2ed9949dc",
		"X-RapidAPI-Host": "air-quality-by-api-ninjas.p.rapidapi.com",
		},
	};

	(async () => {
		try {
			const response = await fetch(url, options);
			let result = await response.json();
			let arr = [];
			for (var key in result) {
				var conc = result[key];

				for (var con in conc) {
				arr.push(conc[con]);
				}
			}
			
			document.getElementById(city + "CO").innerHTML = arr[0];
			document.getElementById(city + "NO2").innerHTML = arr[2];
			document.getElementById(city + "O3").innerHTML = arr[4];
			document.getElementById(city + "SO2").innerHTML = arr[6];
			document.getElementById(city + "PM25").innerHTML = arr[8];
			document.getElementById(city + "PM10").innerHTML = arr[8];
		} catch (error) {
			console.error(error);
		}
	})();
}

// Get the city name from the user if the user clicks the submit button or hits enter in the text field
// Change the concentration information displayed by the user once the event is triggered
submit1.addEventListener("click", (e) => {
	e.preventDefault();
	city = city1.value;
	displayConcentrationLevel(city);
});

// Load the concentration information of the major cities in the table when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
	displayConcentrationLevel("Toronto");
	const cities = ["New York", "Toronto", "Mumbai", "Berlin"];
	for (city in cities) {
		displayConcentrationLevelTable(cities[city]);
	}
});
