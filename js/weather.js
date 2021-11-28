const API_KEY = "77172c04cfce7e47389b8c04e92b282e";

function onGeoOk(position){
  const lat = position.coords.latitude; // 위도
  const lon = position.coords.longitude; // 경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  //const url = `api.openweathermap.org/data/2.5/weather?id=${city}&appid=${API_KEY}&units=metric&lang=ko`;

  fetch(url).then(response => response.json()).then(data => {
    const city = document.querySelector("#weather span:first-child");
    const weather = document.querySelector("#weather span:last-child");
    const weatherIcon = document.createElement("img");
    weatherIcon.className = "weatherIcon";
    document.querySelector("#weather").appendChild(weatherIcon);
    
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}˚C`;
    city.innerText = data.name;
  }); // 직접 url로 이동하지 않고 JS가 fetch를 통해 url 정보를 가져옴
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

// location impormation
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

