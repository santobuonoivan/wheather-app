import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForescastItem';

import './styles.css';

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = { forecastData: null, }    
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }

    componentDidUpdate = (prevProps) => {
        if(prevProps.city !== this.props.city){
            console.log("prop de ciudad previa",prevProps.city)
            console.log("prop de ciudad actual actualizada en el render",this.props.city)
            this.setState({forecastData:null})
            this.updateCity(this.props.city);//this.props.ciudad es la que vienen al hacer click y se actualiza cuando entra al render
        }
    }
    
    updateCity = city => {
        
    }
    renderForecastItemDays(forecastData) {
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
    renderProgress = () => {
        return <h3>cargando pronostico extendido</h3>;
    }
            
    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className='forecast-title'>                    
                    Pronostico extendido para { city }
                </h2>
                { 
                    forecastData ? 
                        this.renderForecastItemDays(forecastData) :
                        this.renderProgress()
                }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;