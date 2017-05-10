import React, { Component } from 'react';

import 'bootswatch/flatly/bootstrap.css';
import {Navbar, NavItem, Nav, Grid, Row, Col} from 'react-bootstrap'
import Weather from "./Weather"

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
            <Col sm={4}>
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
            <Col sm={8}>
              <Weather key={activePlace} id={PLACES[activePlace].id} />
            </Col>
          </Row>
          <Row>
            <Col md={12}>

            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
