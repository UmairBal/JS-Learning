import {getWeather} from './api.js'
import { showWeather, showError, renderFavorites } from './ui.js'
import { getFavorites, addFavorite, removeFavorites } from './storage.js'

const input = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const favList = document.getElementById("favoritesList")

async function searchCity() {
    const city = input.value.trim();
    if (!city) return;

    try {
        const data = await getWeather(city)
        showWeather(data)
        document.getElementById("addFavBtn").onclick = () => {
            addFavorite(data.name)
            renderFavorites(getFavorites());
        }; 
    }
    catch (err){
        showError("City not found. Try Again! ")
    }
}

searchBtn.addEventListener("click", searchCity);
renderFavorites(getFavorites());
favList.addEventListener("click", e => {
    if (e.target.classList.contains("remove")) {
        const city = e.target.dataset.city;
        removeFavorites(city);
        renderFavorites(getFavorites());
    }
});