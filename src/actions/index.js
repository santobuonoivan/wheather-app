import { api_key, url_base_forecast } from './../constants/api_url';
import transformForecast from './../services/transformForecast';
import TransformWeather from './../services/transformWeather';
import getUrlWeatherByCity from './../services/getUrlWeatherByCity';




export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const SET_WEATHER = 'SET_WEATHER';

const setCity = payload => ({ type: 'SET_CITY', payload });

const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload});

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

    /*
    const api_weather =  getUrlWeatherByCity(this.state.city)
    fetch(api_weather)
    .then( resolve => {
        return resolve.json();
    })
    .then( data => {
        const newWeather = TransformWeather(data);
        this.setState({
           data: newWeather,
        });
    });
    */
};
