import { SUN, CLOUD, RAIN, SNOW, THUNDER, DRIZZLE } from './../constants/weathers';


const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0]); 
    const temperature = Math.trunc(temp);

    const data = {
        humidity,
        temperature,
        wind: `${speed} m/s`,
        weatherState,
    }
    return data;
}

const getWeatherState = weather => {
    const { id } = weather;
    if ( id < 300 ) {
        return THUNDER;
    } else if ( id < 400 ) {
        return DRIZZLE;
    } else if ( id < 600 ) {
        return RAIN;
    } else if ( id < 700 ) {
        return SNOW;
    } else if ( id === 800 ) {
        return SUN;
    } else {
        return CLOUD;
    }
}

export default transformWeather;