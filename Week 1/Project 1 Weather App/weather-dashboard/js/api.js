const API_KEY = "e15ad2de48686775700d049be41605f1"

export async function getWeather(city){
    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        if (!res.ok) throw new Error("City not found");
        return await res.json();
    } catch (err){
        console.error(err);
        throw err;
    }
}
