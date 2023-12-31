const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8bf3b7089dmsh44f8fa92e6244c5p14f9dajsn2f874cb694e3',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'

	}
};

const getWeather = (city) => {
	cityName.innnerHTML = city

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {

			console.log(response)

			cloud_pct.innerHTML = response.cloud_pct
			temp1.innerHTML = response.temp
			temp.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity1.innerHTML = response.humidity
			humidity.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed1.innerHTML = response.wind_speed
			wind_speed.innerHTML = response.wind_speed
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset

		})
		.catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})
getWeather("city")

const fixeWeather1 = (city1) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city1, options)
		.then(response => response.json())
		.then(data1 => {

			console.log(data1)
			temp2.innerHTML = data1.temp;
			humidity2.innerHTML = data1.humidity;
			wind_speed2.innerHTML = data1.wind_speed;
			cloud_pct2.innerHTML = data1.cloud_pct;
			sunrise2.innerHTML = data1.sunrise
			sunset2.innerHTML = data1.sunset
		})
		.catch(error => console.error(error));
}
fixeWeather1("mumbai")




const fixeWeather2 = (city2) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city2, options)
		.then(response => response.json())
		.then(data2 => {

			console.log(data2)
			temp3.innerHTML = data2.temp;
			humidity3.innerHTML = data2.humidity;
			wind_speed3.innerHTML = data2.wind_speed;
			cloud_pct3.innerHTML = data2.cloud_pct;
			sunrise3.innerHTML = data2.sunrise
			sunset3.innerHTML = data2.sunset
		})
		.catch(error => console.error(error));
}
fixeWeather2("pune")




const fixeWeather3 = (city3) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city3, options)
		.then(response => response.json())
		.then(data3 => {

			console.log(data3)
			temp4.innerHTML = data3.temp;
			humidity4.innerHTML = data3.humidity;
			wind_speed4.innerHTML = data3.wind_speed;
			cloud_pct4.innerHTML = data3.cloud_pct;
			sunrise4.innerHTML = data3.sunrise
			sunset4.innerHTML = data3.sunset
		})
		.catch(error => console.error(error));
}
fixeWeather3("nagpur")



const fixeWeather4 = (city4) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city4, options)
		.then(response => response.json())
		.then(data4 => {

			console.log(data4)
			temp5.innerHTML = data4.temp;
			humidity5.innerHTML = data4.humidity;
			wind_speed5.innerHTML = data4.wind_speed;
			cloud_pct5.innerHTML = data4.cloud_pct;
			sunrise5.innerHTML = data4.sunrise
			sunset5.innerHTML = data4.sunset
		})
		.catch(error => console.error(error));
}
fixeWeather4("nashik")