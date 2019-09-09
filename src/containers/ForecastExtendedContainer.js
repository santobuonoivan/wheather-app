import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from './../components/ForecastExtended';
import { connect } from 'react-redux';


class ForecastExtendedContainer extends Component {
    render() {
        console.log(this.props.city);
        return (
            this.props.city &&
           <ForecastExtended city={this.props.city}/>
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ city: state.city });// completo y abajo reducido
//const mapStateToProps = ({ city }) => ({ city });

export default connect(mapStateToProps)(ForecastExtendedContainer);
