import React from 'react';
import WeatherIcons from 'react-weathericons';

const icons = {
    cloud: "cloud",
    cloudy: "cloudy",
    sun: "day-sunny",
    rain: "rain",
    snow: "snow",
    windy: "windy",
};
const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if (icons)
        return <WeatherIcons name={icon} size='2x'/>
    else
        return <WeatherIcons name={"day-sunny"} size='2x'/>

};
const WeatherTemperature = ({temperature, weatherState}) => (
    <div>
            <WeatherIcons name='day-sunny' size='2x'/>
        <span>{`${temperature} C°`}</span>
    </div>
);

export default WeatherTemperature;