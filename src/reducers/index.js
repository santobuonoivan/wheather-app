import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { cities,getForecastDataFromCities as _getForecastDataFromCities } from './cities';
import { city } from './city';

export default combineReducers({
    cities,
    city
});

/*
export const getCity = state => state.city;
*/
export const getCity = createSelector(state => state.city, city => city);

/*
export const getForecastDataFromCities = state =>( 
    _getForecastDataFromCities( state.cities, getCity(state)));
*/

export const getForecastDataFromCities = createSelector( 
    state => state.cities, 
    getCity,
    _getForecastDataFromCities);
