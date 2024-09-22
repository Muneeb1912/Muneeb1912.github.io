const apiKey = "e657fb02a0ce6cd4d4379ba6647e764d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchinp = document.querySelector("#search input");
let searchbtn = document.querySelector("#search button");
let weatherIcon = document.querySelector(".weather-icon");

async function  checkWeather(city) {
 const respone = await fetch(apiUrl + city + `&appid=${apiKey}`);

if(respone.status == 404){
document.querySelector(".error").style.display = "block";
document.querySelector(".weather").style.display = "none";
}else{
    var data = await respone.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./images/mist.png"
    }
    
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
        
}


}





searchbtn.addEventListener("click",()=>{
checkWeather(searchinp.value)
});




























checkWeather()