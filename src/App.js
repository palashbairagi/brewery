import React, { Component } from 'react';
import Breweries from './components/Breweries';

import './App.css';

class App extends Component 
{
	
	state = {
		breweries: [],
		filteredBreweries: []
	}
  
	render() 
    {
    	return (
		    <div className="App">
		    	<form>
		    		<input type = "text" onChange = { this.filterBreweries } />
		    	</form>
		    	<Breweries breweries = { this.state.filteredBreweries }/>
		    </div>
		);
	}

	componentDidMount()
	{
		fetch('https://api.openbrewerydb.org/breweries')
		.then(res => res.json())
		.then((data) => {
			this.setState({ 
				breweries: data,
				filteredBreweries: data
			})
		})
		.catch(console.log)
	}
    

	filterBreweries = (e) =>
	{
		let filteredBreweries = this.state.breweries
		filteredBreweries = filteredBreweries.filter((brewery) => {
			let breweryName = brewery.city.toLowerCase() 
			return breweryName.indexOf(e.target.value.toLowerCase()) !== -1
		})

		this.setState({
			filteredBreweries
		})
	}

}

export default App;
