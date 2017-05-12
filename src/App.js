import React, { Component } from 'react';

import 'bootswatch/flatly/bootstrap.css';
import {Navbar, NavItem, Nav, Grid, Row, Col} from 'react-bootstrap'
import Weather from './Weather'

const PLACES = [
  { name: "Saratov", id: "498677" },
  { name: "Khvalynsk", id: "548982" },
  { name: "Elbrus", id: "563534" },
  { name: "Sheregesh", id: "1492252" }
];



class App extends Component {
  constructor(){
    super();
    this.state = {
      activePlace: 0,
    }
  }
  render() {
    const activePlace = this.state.activePlace;

    return (
      <div>
        <Navbar>
          <Navbar.Brand>
            Weather App
          </Navbar.Brand>
        </Navbar>
        <Grid>
          <Row>
            <Col sm={4} md={3} mdOffset={2}>
              <h3>Select a city</h3>
              <Nav
                bsStyle="pills"
                stacked
                activeKey={activePlace}
                onSelect={index => {
                  this.setState({ activePlace: index });
                }}
              >
                {PLACES.map((place, index) => (
                  <NavItem key={index} eventKey={index}>{place.name}</NavItem>
                ))}
              </Nav>
            </Col>
            <Col sm={8} md={5}>
              <Weather key={activePlace} id={PLACES[activePlace].id} />
            </Col>
          </Row>
          <Row>
            <Col md={8} sm={12} mdOffset={2}>
              <div style={{margin:"20px"}}>
                <div>
                  <iframe
                    style={{display: this.state.activePlace === 0 ? 'block' : 'none'}}
                    src="https://lk.i-cam.pro/embed/v2/?server=200-c15a8ac1a8f307d2c2e7bd1846b2775e&amp;camera=0&amp;width=&amp;height=&amp;lang=ru"
                    width="640" height="360" frameBorder="0" allowFullScreen>
                  </iframe>
                  <iframe
                    style={{display: this.state.activePlace === 1 ? 'block' : 'none' }}
                    src="https://lk.i-cam.pro/embed/v2/?server=100-a894474fbc03369068d14e0cd06b1ebe&amp;camera=0&amp;width=&amp;height=&amp;lang=ru"
                    width="640" height="360" frameBorder="0" allowFullScreen>
                  </iframe>
                  <iframe
                    style={{display: this.state.activePlace === 2 ? 'block' : 'none' }}
                    src="https://open.ivideon.com/embed/v2/?server=100-6170a6f9504a434f6a2841ea94df8567&amp;camera=0&amp;width=&amp;height=&amp;lang=ru"
                    width="640" height="360" frameBorder="0" allowFullScreen>
                  </iframe>
                  <iframe
                    style={{display: this.state.activePlace === 3 ? 'block' : 'none' }}
                    src="https://open.ivideon.com/embed/v2/?server=100-aeea7ddd1db43534b7171ba4b799b1c3&amp;camera=327680&amp;width=&amp;height=&amp;lang=ru"
                    width="640" height="360" frameBorder="0" allowFullScreen>
                  </iframe>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
