const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8bf3b7089dmsh44f8fa92e6244c5p14f9dajsn2f874cb694e3',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'

	}
};

const getWeather = (city) => {
	cityName.innnerHTML = city

	fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city, options)
		.then(response => response.json())
		.then((response) => {

			console.log(response)

			cloud_pct.innerHTML = response.current.cloud
			temp1.innerHTML = response.current.temp_c
			temp.innerHTML = response.current.temp_c
			feels_like.innerHTML = response.current.feelslike_c
			humidity1.innerHTML = response.current.humidity
			humidity.innerHTML = response.current.humidity
			uv.innerHTML = response.current.uv
			temp_f.innerHTML = response.current.temp_f
			wind_speed1.innerHTML = response.current.wind_kph
			wind_speed.innerHTML = response.current.wind_kph
			wind_degree.innerHTML = response.current.wind_degree
			wind_dir.innerHTML = response.current.wind_dir
		})
		.catch(error => console.error(error));
}
submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})
getWeather("/")

const fixeWeather1 = (city1) => {
	fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city1, options)
		.then(response => response.json())
		.then(data1 => {

			console.log(data1)
			temp2.innerHTML = data1.current.temp_c;
			humidity2.innerHTML = data1.current.humidity;
			wind_speed2.innerHTML = data1.current.wind_kph;
			wind_degree2.innerHTML = data1.current.wind_degree
			wind_dir2.innerHTML = data1.current.wind_dir
			cloud_pct2.innerHTML = data1.current.cloud;
			
		})
		.catch(error => console.error(error));
}
fixeWeather1("mumbai")




const fixeWeather2 = (city2) => {
	fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city2, options)
		.then(response => response.json())
		.then(data2 => {

			console.log(data2)
			temp3.innerHTML = data2.current.temp_c;
			humidity3.innerHTML = data2.current.humidity;
			wind_speed3.innerHTML = data2.current.wind_kph;
			wind_degree3.innerHTML = data2.current.wind_degree
			wind_dir3.innerHTML = data2.current.wind_dir
			cloud_pct3.innerHTML = data2.current.cloud;
		})
		.catch(error => console.error(error));
}
fixeWeather2("pune")




const fixeWeather3 = (city3) => {
	fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city3, options)
		.then(response => response.json())
		.then(data3 => {

			console.log(data3)
			temp4.innerHTML = data3.current.temp_c;
			humidity4.innerHTML = data3.current.humidity;
			wind_speed4.innerHTML = data3.current.wind_kph;
			wind_degree4.innerHTML = data3.current.wind_degree
			wind_dir4.innerHTML = data3.current.wind_dir
			cloud_pct4.innerHTML = data3.current.cloud;
			
		})
		.catch(error => console.error(error));
}
fixeWeather3("nagpur")



const fixeWeather4 = (city4) => {
	fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city4, options)
		.then(response => response.json())
		.then(data4 => {

			console.log(data4)
			temp5.innerHTML = data4.current.temp_c;
			humidity5.innerHTML = data4.current.humidity;
			wind_speed5.innerHTML = data4.current.wind_kph;
			wind_degree5.innerHTML = data4.current.wind_degree
			wind_dir5.innerHTML = data4.current.wind_dir
			cloud_pct5.innerHTML = data4.current.cloud;
			
			
		})
		.catch(error => console.error(error));
}
fixeWeather4("nasik")
