
function myfun()
{
let cname=document.getElementById("searchc").value;

document.getElementById("cha").innerHTML = cname;

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cname}&appid=c9c0a0c15bd79b757909300b586038f5&%3Fq%3Dsura%26appid=`)
  .then(response => response.json())
  .then(response => {console.log(response)
   
   
    document.getElementById("temp").innerHTML = response.main.temp;
    document.getElementById("temp_min").innerHTML = response.main.temp_min;
    document.getElementById("temp_max").innerHTML = response.main.temp_max;
    document.getElementById("visibility").innerHTML = response.visibility;
    
    document.getElementById("cloud").innerHTML = response.clouds.all;
    document.getElementById("feel").innerHTML = response.main.feels_like;
    document.getElementById("pre").innerHTML = response.main.pressure;
    document.getElementById("hum").innerHTML = response.main.humidity;


    document.getElementById("speed").innerHTML = response.wind.speed;
    document.getElementById("deg").innerHTML = response.wind.deg;
    document.getElementById("sun1").innerHTML = response.sys.sunrise;
    document.getElementById("sun2").innerHTML = response.sys.sunset;

    
    document.getElementById("wicon").src = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;

    
  
  
  })
  .catch(err => console.error(err));

}
fetch('https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=c9c0a0c15bd79b757909300b586038f5&%3Fq%3Dsura%26appid=')
.then(response => response.json())
.then(response => {console.log(response)
 
 
  document.getElementById("m-temp").innerHTML = response.main.temp;
  document.getElementById("m-temp_min").innerHTML = response.main.temp_min;
  document.getElementById("m-temp_max").innerHTML = response.main.temp_max;
  document.getElementById("m-visibility").innerHTML = response.visibility;
  
  document.getElementById("m-cloud").innerHTML = response.clouds.all;
  document.getElementById("m-feel").innerHTML = response.main.feels_like;
  document.getElementById("m-pre").innerHTML = response.main.pressure;
  document.getElementById("m-hum").innerHTML = response.main.humidity;


  document.getElementById("m-speed").innerHTML = response.wind.speed;
  document.getElementById("m-deg").innerHTML = response.wind.deg;
  document.getElementById("m-sun1").innerHTML = response.sys.sunrise;
  document.getElementById("m-sun2").innerHTML = response.sys.sunset;


})
.catch(err => console.error(err));


fetch('https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=c9c0a0c15bd79b757909300b586038f5&%3Fq%3Dsura%26appid=')
.then(response => response.json())
.then(response => {console.log(response)
 
 
  document.getElementById("d-temp").innerHTML = response.main.temp;
  document.getElementById("d-temp_min").innerHTML = response.main.temp_min;
  document.getElementById("d-temp_max").innerHTML = response.main.temp_max;
  document.getElementById("d-visibility").innerHTML = response.visibility;
  
  document.getElementById("d-cloud").innerHTML = response.clouds.all;
  document.getElementById("d-feel").innerHTML = response.main.feels_like;
  document.getElementById("d-pre").innerHTML = response.main.pressure;
  document.getElementById("d-hum").innerHTML = response.main.humidity;


  document.getElementById("d-speed").innerHTML = response.wind.speed;
  document.getElementById("d-deg").innerHTML = response.wind.deg;
  document.getElementById("d-sun1").innerHTML = response.sys.sunrise;
  document.getElementById("d-sun2").innerHTML = response.sys.sunset;


})
.catch(err => console.error(err));


fetch('https://api.openweathermap.org/data/2.5/weather?q=pune&appid=c9c0a0c15bd79b757909300b586038f5&%3Fq%3Dsura%26appid=')
.then(response => response.json())
.then(response => {console.log(response)
 
 
  document.getElementById("p-temp").innerHTML = response.main.temp;
  document.getElementById("p-temp_min").innerHTML = response.main.temp_min;
  document.getElementById("p-temp_max").innerHTML = response.main.temp_max;
  document.getElementById("p-visibility").innerHTML = response.visibility;
  
  document.getElementById("p-cloud").innerHTML = response.clouds.all;
  document.getElementById("p-feel").innerHTML = response.main.feels_like;
  document.getElementById("p-pre").innerHTML = response.main.pressure;
  document.getElementById("p-hum").innerHTML = response.main.humidity;


  document.getElementById("p-speed").innerHTML = response.wind.speed;
  document.getElementById("p-deg").innerHTML = response.wind.deg;
  document.getElementById("p-sun1").innerHTML = response.sys.sunrise;
  document.getElementById("p-sun2").innerHTML = response.sys.sunset;


})
.catch(err => console.error(err));


fetch('https://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=c9c0a0c15bd79b757909300b586038f5&%3Fq%3Dsura%26appid=')
.then(response => response.json())
.then(response => {console.log(response)
 
 
  document.getElementById("l-temp").innerHTML = response.main.temp;
  document.getElementById("l-temp_min").innerHTML = response.main.temp_min;
  document.getElementById("l-temp_max").innerHTML = response.main.temp_max;
  document.getElementById("l-visibility").innerHTML = response.visibility;
  
  document.getElementById("l-cloud").innerHTML = response.clouds.all;
  document.getElementById("l-feel").innerHTML = response.main.feels_like;
  document.getElementById("l-pre").innerHTML = response.main.pressure;
  document.getElementById("l-hum").innerHTML = response.main.humidity;


  document.getElementById("l-speed").innerHTML = response.wind.speed;
  document.getElementById("l-deg").innerHTML = response.wind.deg;
  document.getElementById("l-sun1").innerHTML = response.sys.sunrise;
  document.getElementById("l-sun2").innerHTML = response.sys.sunset;


})
.catch(err => console.error(err));