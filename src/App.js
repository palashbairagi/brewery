import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import BreweryContainer from './components/BreweryContainer';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.scss';

class App extends Component 
{
	render() 
    {
    	return (
			<Container>
				<div className = 'wrapper'>
					<Header />
					<BreweryContainer />
					<Footer />
				</div>
			</Container>
		);
	}
}

export default App;
