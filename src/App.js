import React, { Component } from 'react';
import BreweryContainer from './components/BreweryContainer'
import Header from './components/Header'

import './App.css';

class App extends Component 
{
	render() 
    {
    	return (
			<div>
				<Header />
				<BreweryContainer />
			</div>
		);
	}
}

export default App;
