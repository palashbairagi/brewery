import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Progress from './Progress'
import BreweryItem from './BreweryItem'

class Breweries extends Component 
{

	state = {
		breweries: [],
		filteredBreweries: [],
		is_loading: true
	}

	render() 
	{
		if ( this.state.is_loading === true )
		{
			return (
				<Progress />
			);
		}
		else
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
	}

	componentDidMount()
	{
		var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
			targetUrl = 'https://brewery-api-v1.herokuapp.com/api/breweries'
	
		fetch( proxyUrl + targetUrl )
		.then(res => res.json())
		.then((data) => {
			this.setState({ 
				breweries: data,
				filteredBreweries: data,
				is_loading : false
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
