import "./style.css";

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
}

getDataFromLocation("new york");
