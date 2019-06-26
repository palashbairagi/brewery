import React, { Component } from 'react'
import BreweryItem from './BreweryItem'

class Breweries extends Component 
{

	state = {
		breweries: [],
		filteredBreweries: []
	}

	render() 
	{
		return (
		<div>
			<div>
				<form>
					<input type = "text" onChange = { this.filterBreweries } />
				</form>	
			</div>
			<div>
				{this.state.filteredBreweries.map((brewery) => (
					< BreweryItem key = { brewery.id } brewery = { brewery } />
				))}
			</div>
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

export default Breweries;
