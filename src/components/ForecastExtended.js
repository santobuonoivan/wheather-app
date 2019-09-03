import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForescastItem';
import './styles.css';

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
];

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = { forecastData: null, }    
    }

    renderForecastItemDays() {
        return (
            days.map( day => (
                <ForecastItem weekDay={day} hour={10}></ForecastItem>
                ))
                );
            }
            
    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className='forecast-title '>                    
                    Pronostico extendido para { city }
                </h2>
                { 
                    forecastData ? 
                        this.renderForecastItemDays() :
                        this.renderPogress()
                }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;