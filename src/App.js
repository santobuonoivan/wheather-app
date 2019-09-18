import React from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import './App.css';

const cities = [
  'Buenos aires,ar',
  'Bogota,col',
  'Mexico,mex',
  'Washington,us',
  'Madrid,es',
  'Lima,pe',
];


const App = () => {  
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
          <LocationListContainer
            cities = { cities } >
          </LocationListContainer>
        </Col>
        <Col xs={12} sm={6}>
          <Paper elevation={4}>
            <div className="details">
              <ForecastExtendedContainer/>
            </div>
          </Paper>
        </Col>
      </Row>
    </Grid>
  );
}



export default App;