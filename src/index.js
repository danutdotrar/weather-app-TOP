import "./style.css";

const searchCity = document.getElementById("search-city");
const searchBtn = document.getElementById("search-button");
const weatherContainer = document.getElementById("weather-container");
// Working with APIs (Application Programming Interfaces)
// // Promises
// fetch(
//     "https://api.weatherapi.com/v1/current.json?key=70f95910843b4d8893b143641231806&q=london"
// )
//     .then((res) => res.json())
//     .then(getTemp);

// function getTemp(data) {
// console.log(data);
// }

// Get the data from the api
async function getDataFromLocation(location) {
    const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=70f95910843b4d8893b143641231806&q=${location}`
    );
    const data = await res.json();

    console.log(data);
    updateDOM(data);
}

// Generate DOM data
function updateDOM(data) {
    let content;

    // Create content
    content = `<div class="city-name" id="city-name">${data.location.name}</div>
    <div class="city-details" id="city-details">
        <div class="local-time" id="local-time">${data.location.localtime}</div>
        <div class="condition" id="condition">${data.current.condition.text}</div>
        <div class="temp" id="temp">Temperature: ${data.current.temp_c}</div>
        <div class="humidity" id="humidity">Humidity: ${data.current.humidity}</div>
        <div class="wind" id="wind">${data.current.wind_kph} kph</div>
    </div>`;

    // Update container
    weatherContainer.innerHTML = content;
}

// Event Listeners
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    getDataFromLocation(searchCity.value);
});
