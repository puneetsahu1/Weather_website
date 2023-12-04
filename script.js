const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '51a0ee693amsha735ca2cd40f391p1adbbcjsn52f4b5101c97',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

 const getWeather = (city) => {
cityName.innerHTML = city
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
  
    //   cloud_pct.innerHTML = data.cloud_pct;
      feels_like.innerHTML = data.feels_like;
      humidity.innerHTML = data.humidity;
      humidity2.innerHTML = data.humidity;
      max_temp.innerHTML = data.max_temp;
      min_temp.innerHTML = data.min_temp;
      sunrise.innerHTML = data.sunrise;
      sunset.innerHTML = data.sunset;
      temp.innerHTML = data.temp;
      temp2.innerHTML = data.temp;
      wind_degrees.innerHTML = data.wind_degrees;
      wind_speed.innerHTML = data.wind_speed;
      wind_speed2.innerHTML = data.wind_speed;
    })
    .catch(err => console.error(err));



    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
  
    //   cloud_pct.innerHTML = data.cloud_pct;
      feels_like.innerHTML = data.feels_like;
      humidity.innerHTML = data.humidity;
      
      max_temp.innerHTML = data.max_temp;
      min_temp.innerHTML = data.min_temp;
      sunrise.innerHTML = data.sunrise;
      sunset.innerHTML = data.sunset;
      temp.innerHTML = data.temp;
     
      wind_degrees.innerHTML = data.wind_degrees;
      wind_speed.innerHTML = data.wind_speed;
      
    })
    .catch(err => console.error(err));


    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
  
      S_cloud_pct.innerHTML = data.cloud_pct;
      S_feels_like.innerHTML = data.feels_like;
      S_humidity.innerHTML = data.humidity;
      
      S_max_temp.innerHTML = data.max_temp;
      S_min_temp.innerHTML = data.min_temp;
     S_sunrise.innerHTML = data.sunrise;
     S_sunset.innerHTML = data.sunset;
      S_temp.innerHTML = data.temp;
     
      S_wind_degrees.innerHTML = data.wind_degrees;
      S_wind_speed.innerHTML = data.wind_speed;
     
    })
    .catch(err => console.error(err));


    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', options)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
  
      B_cloud_pct.innerHTML = data.cloud_pct;
      B_feels_like.innerHTML = data.feels_like;
      B_humidity.innerHTML = data.humidity;
     
      B_max_temp.innerHTML = data.max_temp;
      B_min_temp.innerHTML = data.min_temp;
      B_sunrise.innerHTML = data.sunrise;
      B_sunset.innerHTML = data.sunset;
      B_temp.innerHTML = data.temp;
     
      B_wind_degrees.innerHTML = data.wind_degrees;
      B_wind_speed.innerHTML = data.wind_speed;
     
    })
    .catch(err => console.error(err));


    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
  
      L_cloud_pct.innerHTML = data.cloud_pct;
    L_feels_like.innerHTML = data.feels_like;
      L_humidity.innerHTML = data.humidity;
      
      L_max_temp.innerHTML = data.max_temp;
      L_min_temp.innerHTML = data.min_temp;
      L_sunrise.innerHTML = data.sunrise;
      L_sunset.innerHTML = data.sunset;
      L_temp.innerHTML = data.temp;
     
      L_wind_degrees.innerHTML = data.wind_degrees;
      L_wind_speed.innerHTML = data.wind_speed;
     
    })
    .catch(err => console.error(err));



    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
  
      K_cloud_pct.innerHTML = data.cloud_pct;
      K_feels_like.innerHTML = data.feels_like;
      K_humidity.innerHTML = data.humidity;
      K_max_temp.innerHTML = data.max_temp;
      K_min_temp.innerHTML = data.min_temp;
      K_sunrise.innerHTML = data.sunrise;
      K_sunset.innerHTML = data.sunset;
      K_temp.innerHTML = data.temp;
      
      K_wind_degrees.innerHTML = data.wind_degrees;
      K_wind_speed.innerHTML = data.wind_speed;
     
    })
    .catch(err => console.error(err));
}



submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")
