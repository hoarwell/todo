const weatherBox = document.querySelector(".weatherBox");  
const weatherSpan = document.querySelector(".js-weather");
const iconBox = document.querySelector(".iconBox");
const API_KEY = '9a0073a226700978e96bb74160fd450a';
const COORDS = 'coords';

function getWeather(lat, lon){
    fetch(
         `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){ //then을 이용해서 fetch 작업을 기다리고 나서 다음 function이 실행되게 해준다.
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const city = json.name;
        const weather = json.weather[0].icon;
        iconBox.innerHTML = "<img src=\"" + `http://openweathermap.org/img/wn/${weather}@2x.png` + "\">";
        weatherSpan.innerText = `${temperature}°C ${city}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude : latitude,
        longitude : longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("Cannot access geto location");
}

function askForCoords(){  
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();