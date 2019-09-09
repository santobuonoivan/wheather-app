import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LocationList from '../components/LocationList';
import { connect } from 'react-redux';
import { setSelectedCity } from './../actions';


export class LocationListContainer extends Component {

    handleSelectedLocation = (city) => {
        this.props.dispatchSetCity(city);    
    }

    render() {
        return (
            <LocationList cities={ this.props.cities}
                onSelectedLocation={this.handleSelectedLocation}>
            </LocationList>
        );
    }
}

LocationListContainer.propTypes = {
    dispatchSetCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
};

const mapDispatchToProps = dispatch => ({
    dispatchSetCity: value => dispatch(setSelectedCity(value))
});

export default connect(null,mapDispatchToProps)(LocationListContainer);
