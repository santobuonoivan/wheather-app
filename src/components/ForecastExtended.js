import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForescastItem';
import './styles.css';

const renderForecastItemDays = (forecastData) => {
        return (
            forecastData.map( forecast => (
                <ForecastItem 
                    key={`${forecast.weekDay}${forecast.hour}`}
                    weekDay={forecast.weekDay} 
                    hour={forecast.hour}
                    data={forecast.data}>
                </ForecastItem>
            ))
        );
    }
const renderProgress = () => {
        return <h3>cargando pronostico extendido</h3>;
    }

const ForecastExtended = ( { city, forecastData } ) => {
    return (
        <div>
            <h2 className='forecast-title'>                    
                Pronostico extendido para { city }
            </h2>
            { 
                forecastData ? 
                    renderForecastItemDays(forecastData) :
                    renderProgress()
            }
        </div>
    );
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

export default ForecastExtended;