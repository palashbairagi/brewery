import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

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
			<Row>
				<Col>
					<div className = 'search-wrapper' >
						<Form>
							<FormControl className = 'search-bar' type = 'text' placeholder = 'City' onChange = { this.filterBreweries } />
						</Form>
					</div>
				</Col>

				<Col>
					{this.state.filteredBreweries.map((brewery) => (
						< BreweryItem key = { brewery.id } brewery = { brewery } />
					))}
				</Col>
			</Row>
		);
	}

	componentDidMount()
	{
		fetch('https://brewery-api-v1.herokuapp.com/api/breweries')
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
