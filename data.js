
const countries = [
    ["Singapore", "🇸🇬", "Singapore", "Asia", "SGD"],
    ["Japan", "🇯🇵", "Tokyo", "Asia", "JPY"],
    ["France", "🇫🇷", "Paris", "Europe", "EUR"],
    ["Germany", "🇩🇪", "Berlin", "Europe", "EUR"]
];

// Display the first country
let country = countries[0];

document.querySelector("h1").textContent = country[0];

document.querySelector("p").textContent =
    country[1] + " Capital: " + country[2] +
    " | Continent: " + country[3] +
    " | Currency: " + country[4];
