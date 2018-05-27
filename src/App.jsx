import React, { Component } from 'react';
import './App.css';

import cars1 from './img/cars1.jpg';
import cars2 from './img/cars2.jpg';
import cars3 from './img/cars3.jpg';
import nature1 from './img/nature1.jpg';
import nature2 from './img/nature2.jpg';
import nature3 from './img/nature3.jpg';
import people1 from './img/people1.jpg';
import people2 from './img/people2.jpg';
import people3 from './img/people3.jpg';


import {
	Grid,
	Row,
	Col,
	Thumbnail,
	Button,
	ButtonToolbar
  } from 'react-bootstrap';

class App extends Component {
	constructor() {
		super();
		this.state = {filter: ['nature','cars','people']};
	}

	filterAll(){
		this.setState({
			filter: ['nature','cars','people']
		})
	}

	filterNature(){
		this.setState({
			filter: ['nature']
		})
	}

	filterCars(){
		this.setState({
			filter: ['cars']
		})
	}

	filterPeople(){
		this.setState({
			filter: ['people']
		})
	}

 	render() {
		return (
			<div className="App">

				<ButtonToolbar className="buttonSet-selection">
					<Button
						className={this.state.filter.length > 1 ? "markedClass button-selection" : "button-selection"}
						onClick={this.filterAll.bind(this)}>Show all
					</Button>
					<Button
						className={(this.state.filter.length === 1 && this.state.filter.indexOf('people') !== -1  )? "markedClass button-selection" : "button-selection"}
						onClick={this.filterPeople.bind(this)}>People
					</Button>
					<Button
						className={(this.state.filter.length === 1 && this.state.filter.indexOf('nature') !== -1  )? "markedClass button-selection" : "button-selection"}
						onClick={this.filterNature.bind(this)}>Nature</Button>
					<Button
						className={(this.state.filter.length === 1 && this.state.filter.indexOf('cars') !== -1  )? "markedClass button-selection" : "button-selection"}
						onClick={this.filterCars.bind(this)}>Cars</Button>
				</ButtonToolbar>

				<Grid fluid className="grid-img">
					<Row className="show-grid">
						<Col xs={12} md={6} lg={4} className={this.state.filter.indexOf('people') !== -1 ? "block" : "none"}>
							<Thumbnail src={people1} className="img">
								<h3>Thumbnail label</h3>
								<p>Description</p>
							</Thumbnail>
						</Col>
						<Col xs={12} md={6} lg={4} className={this.state.filter.indexOf('people') !== -1 ? "block" : "none"}>
							<Thumbnail src={people2} className="img">
								<h3>Thumbnail label</h3>
								<p>Description</p>
							</Thumbnail>
						</Col>
						<Col xs={12} md={6} lg={4} className={this.state.filter.indexOf('people') !== -1 ? "block" : "none"}>
							<Thumbnail src={people3} className="img">
								<h3>Thumbnail label</h3>
								<p>Description</p>
							</Thumbnail>
						</Col>
						<Col xs={12} md={6} lg={4} className={this.state.filter.indexOf('cars') !== -1 ? "block" : "none"}>
							<Thumbnail src={cars1} className="img">
								<h3>Thumbnail label</h3>
								<p>Description</p>
							</Thumbnail>
						</Col>
						<Col xs={12} md={6} lg={4} className={this.state.filter.indexOf('cars') !== -1 ? "block" : "none"}>
							<Thumbnail src={cars2} className="img">
								<h3>Thumbnail label</h3>
								<p>Description</p>
							</Thumbnail>
						</Col>
						<Col xs={12} md={6} lg={4} className={this.state.filter.indexOf('cars') !== -1 ? "block" : "none"}>
							<Thumbnail src={cars3} className="img">
								<h3>Thumbnail label</h3>
								<p>Description</p>
							</Thumbnail>
						</Col>
						<Col xs={12} md={6} lg={4} className={this.state.filter.indexOf('nature') !== -1 ? "block" : "none"}>
							<Thumbnail src={nature1} className="img">
								<h3>Thumbnail label</h3>
								<p>Description</p>
							</Thumbnail>
						</Col>
						<Col xs={12} md={6} lg={4} className={this.state.filter.indexOf('nature') !== -1 ? "block" : "none"}>
							<Thumbnail src={nature2} className="img">
								<h3>Thumbnail label</h3>
								<p>Description</p>
							</Thumbnail>
						</Col>
						<Col xs={12} md={6} lg={4} className={this.state.filter.indexOf('nature') !== -1 ? "block" : "none"}>
							<Thumbnail src={nature3} className="img">
								<h3>Thumbnail label</h3>
								<p>Description</p>
							</Thumbnail>
						</Col>

					</Row>
				</Grid>
			</div>
		);
  	}
}

export default App;
