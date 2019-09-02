import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

import './App.css';

const cities = [
  'Buenos aires,ar',
  'Bogota,col',
  'Mexico,mex',
  'Washington,us',
  'Madrid,es',
  'Lima,pe',
]
class App extends Component {

  constructor() {
    super();
    this.state = {
      city: 'Nueva ciudad',
    }
  }

  handleSlectionLocation = (city) => {
    this.setState({
      city
    });
  }

  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='h5' color='inherit'>
                Weather Map App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <LocationList
              cities = { cities } 
              onselectedLocation = { this.handleSlectionLocation }>
            </LocationList>
          </Col>
          <Col xs={12} sm={6}>
            <Paper elevation={4}>
              <div className="details">
                <ForecastExtended city= { city }></ForecastExtended>
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;