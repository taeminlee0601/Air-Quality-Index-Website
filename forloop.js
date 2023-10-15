function getAirQuality(city) {
  const url = `https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1aea737716msh24751055a31e096p162f0ajsneb172df97232",
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
        console.log(conc);

        for (var con in conc) {
          arr.push(conc[con]);
        }
      }
      co.innerHTML = arr[0];
      no2.innerHTML = arr[2];
      o3.innerHTML = arr[4];
      so2.innerHTML = arr[6];
      pm25.innerHTML = arr[8];
      pm10.innerHTML = arr[10];
    } catch (error) {
      console.error(error);
    }
  })();
}

function getAirQualityCities(city) {
  const url = `https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1aea737716msh24751055a31e096p162f0ajsneb172df97232",
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

submit1.addEventListener("click", (e) => {
  e.preventDefault();
  city = city1.value;
  name1.innerHTML = city;
  getAirQuality(city);
});

document.addEventListener("DOMContentLoaded", () => {
  const cities = ["New York", "Toronto", "Mumbai", "Berlin"];
  for (city in cities) {
    getAirQualityCities(cities[city]);
  }
});
