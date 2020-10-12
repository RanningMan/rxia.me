import { API_key } from '../../../config';
import ThemeStyles from './ThemeStyles';

const seattle = {
    "id": 5809844,
    "name": "Seattle",
    "state": "WA",
    "country": "US",
    "coord": {
        "lon": -122.332069,
        "lat": 47.606209
    }
}

export const getTodaysWeather = async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${seattle.id}&appid=${API_key}`);
    const body = await res.json();
    const weatherId = body.weather[0].id;
    let todaysweather = null;
    if(weatherId > 800) {
        todaysweather = ThemeStyles.clouds; 
    } else if(weatherId === 800) {
        todaysweather = ThemeStyles.sunny; 
    } else if(weatherId >= 700) {
        todaysweather = ThemeStyles.atmosphere; 
    } else if(weatherId >= 600) {
        todaysweather = ThemeStyles.snow;
    } else if(weatherId >= 500) {
        todaysweather = ThemeStyles.rain;
    } else if(weatherId === 300) {
        todaysweather = ThemeStyles.drizzle; 
    } else if(weatherId >= 200) {
        todaysweather = ThemeStyles.thunderstorm; 
    } else {
        todaysweather = ThemeStyles.sunny;
    }
    return todaysweather;
}