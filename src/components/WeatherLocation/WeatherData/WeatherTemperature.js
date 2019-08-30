import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD, 
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
} from './../../../constants/weathers';
import './styles.css';

const icons = {
    [CLOUD]: "cloud",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [THUNDER]: "day-thunderstore",
    [DRIZZLE]: "day-showers",
};
const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    const sizeIcon = "4x"
    if (icons) return <WeatherIcons className="wicon" name={icon} size= {sizeIcon}/>;
    else       return <WeatherIcons className="wicon" name={SUN}  size= {sizeIcon}/>;

};
const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        { getWeatherIcon(weatherState)}
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{` C°`}</span>
    </div>
);
/*
    validacion de data
 */
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature;