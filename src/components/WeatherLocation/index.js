import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {    
    SUN,
    WINDY
} from './../../constants/weathers';

const data = {
    temperature: 10,
    weatherState: SUN,
    humidity:10,
    wind: '10m/s',
}

const data2 = {
    temperature: 10,
    weatherState: WINDY,
    humidity:10,
    wind: '10m/s',
}

class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data,
        };
    };

    handleUpdateClick = () => {
        console.log('Actualizado');
        this.setState({
            city: 'Buenos Aires!',
            data: data2,
        });
    };

    render() {
        const { city, data } = this.state;
        return (
            <div className='weatherLocationCont'>
                <Location city={city}/>
                <WeatherData data={data}/>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    };
};

export default WeatherLocation;