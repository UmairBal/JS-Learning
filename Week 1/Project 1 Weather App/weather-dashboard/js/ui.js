export function showWeather(data) {
    const weatherDiv = document.getElementById("weatherResult");
    const { name, main, weather } = data

    weatherDiv.innerHTML =
        ` <h2>${name}</h2>
    <p>🌡️ Temp: ${main.temp}°C</p>
    <p>💧 Humidity: ${main.humidity}%</p>
    <p>☁️ Condition: ${weather[0].description}</p>
    <button id="addFavBtn">Add to Favorites</button>
  `;
}

export function showError(message) {
    const weatherDiv = document.getElementById("weatherResult");
    weatherDiv.innerHTML = `<p style="color:red;">${message}</p>`
}

export function renderFavorites(favorites){
    const list = document.getElementById("favoritesList")
    list.innerHTML = "";
    favorites.forEach(city => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${city}</span>
        <button class="remove" data-city = "${city}">X</button>
        `;
        list.appendChild(li)
    });
}