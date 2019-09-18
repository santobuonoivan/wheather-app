import React from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from './../components/ForecastExtended';
import { connect } from 'react-redux';
import { getCity, getForecastDataFromCities  } from './../reducers'; 

const ForecastExtendedContainer = (props) =>{
    const { city, forecastData } = props;
    return (
        city &&
        <ForecastExtended city={props.city} forecastData={forecastData}/>
    );
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
};

//const mapStateToProps = state => ({ city: state.city });// completo y abajo reducido
const mapStateToProps = state => ({ city: getCity(state), forecastData: getForecastDataFromCities(state)});

export default connect(mapStateToProps,null)(ForecastExtendedContainer);
