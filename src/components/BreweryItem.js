import React, { Component } from 'react'

export class BreweryItem extends Component
{
	breweryClicked = (e) => {
		console.log(this.props);
	}

	render() 
	{
		return (
			<div onClick = { this.breweryClicked } >
				<h3> 
					{ this.props.brewery.name } 
				</h3>
				<h4>
					{ this.props.brewery.brewery_type }
				</h4>
				<h4>
					{ this.props.brewery.street + ', ' + this.props.brewery.city + ', ' + this.props.brewery.state + ' ' + this.props.brewery.postal_code }
				</h4>
				<a href = { this.props.brewery.website_url } target = '_blank' >
					Website
				</a>
			</div>
		);
	}
}

export default BreweryItem