const KEY = "favorites";

export function getFavorites() {
    return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function addFavorite(city) {
    const favs = getFavorites();
    if (!favs.include(city)) {
        favs.push(city);
        localStorage.setItem(KEY, JSON.stringify(favs));

    }
}

export function removeFavorites(city) {
    const favs = getFavorites().filter(c => c !== city);
    localStorage.setItem(KEY, JSON.stringify(favs))
}