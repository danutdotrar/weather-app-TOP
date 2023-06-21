import "./style.css";
console.log("webpack working!");

// Working with APIs (Application Programming Interfaces)
fetch(
    "https://api.weatherapi.com/v1/current.json?key=70f95910843b4d8893b143641231806&q=london"
)
    .then((res) => res.json())
    .then(getTemp);

function getTemp(data) {
    console.log(data);
}
