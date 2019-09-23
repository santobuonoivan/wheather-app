import { api_key, url_base_forecast } from './../constants/api_url';
import transformForecast from './../services/transformForecast';
import transformWeather from './../services/transformWeather';
import getUrlWeatherByCity from './../services/getUrlWeatherByCity';




export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

/* ACTION CREATORS */

const setCity = payload => ({ type: 'SET_CITY', payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload});
const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload});
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload});

export const setSelectedCity = payload => {
    return dispatch => {
        const url_forecast = `${url_base_forecast}?q=${payload}&APPID=${api_key}&units=metric`;
        
        // activar indicador de busqueda en el estado
        dispatch(setCity(payload));
        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                // modificar el estado de la promise (fetch)
                dispatch(setForecastData({city: payload, forecastData}))
            }
        );
    }
};

export const setWeather = payload => {

    
    return dispatch => {
        payload.forEach(city => {

            dispatch(getWeatherCity(city));

            const api_weather =  getUrlWeatherByCity(city);
            fetch(api_weather).then( data => {
                return data.json();
            }).then( weater_data => {
                const weather = transformWeather(weater_data);
                dispatch(setWeatherCity({city, weather}));
            });

        });
    }    
};
