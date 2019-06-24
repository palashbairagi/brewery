import React, { Component } from 'react';
import BreweryItem from './BreweryItem';

class Breweries extends Component 
{
	render() 
	{
		return this.props.breweries.map((brewery) => (
			< BreweryItem key = { brewery.id } brewery = { brewery } />
		));
	}
}

export default Breweries;
