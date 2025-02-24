import WeatherEnum from "./WeatherEnum";
import ThemeStyles from "./ThemeStyles";
import ThemeType from "./ThemeType";

const seattle = {
  id: 5809844,
  name: "Seattle",
  state: "WA",
  country: "US",
  coord: {
    lon: -122.332069,
    lat: 47.606209,
  },
};

export const getTodaysWeather = async () => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?id=${seattle.id}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  );
  const body = await res.json();
  const weatherId = body.weather[0].id;
  let todaysweather = null;
  if (weatherId > 800) {
    todaysweather = WeatherEnum.Clouds;
  } else if (weatherId === 800) {
    todaysweather = WeatherEnum.Sunny;
  } else if (weatherId >= 700) {
    todaysweather = WeatherEnum.Atmosphere;
  } else if (weatherId >= 600) {
    todaysweather = WeatherEnum.Snow;
  } else if (weatherId >= 500) {
    todaysweather = WeatherEnum.Rain;
  } else if (weatherId === 300) {
    todaysweather = WeatherEnum.Drizzle;
  } else if (weatherId >= 200) {
    todaysweather = WeatherEnum.Thunderstorm;
  } else {
    todaysweather = WeatherEnum.Sunny;
  }
  return todaysweather;
};

export const getWeatherTheme = (weatherEnum) => {
  let theme = ThemeStyles.default;
  switch (weatherEnum) {
    case WeatherEnum.Clouds:
      theme = ThemeStyles.clouds;
      break;
    case WeatherEnum.Sunny:
      theme = ThemeStyles.sunny;
      break;
    case WeatherEnum.Atmosphere:
      theme = ThemeStyles.atmosphere;
      break;
    case WeatherEnum.Snow:
      theme = ThemeStyles.snow;
      break;
    case WeatherEnum.Rain:
      theme = ThemeStyles.rain;
      break;
    case WeatherEnum.Drizzle:
      theme = ThemeStyles.drizzle;
      break;
    case WeatherEnum.Thunderstorm:
      theme = ThemeStyles.thunderstorm;
      break;
    default:
      break;
  }
  return theme;
};

export const isRainning = (weatherEnum) => {
  const preferredTheme = localStorage.getItem("preferredTheme");
  return (
    preferredTheme === ThemeType.WEATHER &&
    (weatherEnum === WeatherEnum.Drizzle ||
      weatherEnum === WeatherEnum.Rain ||
      weatherEnum === WeatherEnum.Thunderstorm)
  );
};

export const cloudyWeather = (weather) =>
  weather === WeatherEnum.Snow ||
  weather === WeatherEnum.Clouds ||
  weather === WeatherEnum.Atmosphere ||
  weather === WeatherEnum.Rain ||
  weather === WeatherEnum.Thunderstorm ||
  weather === WeatherEnum.Drizzle;
