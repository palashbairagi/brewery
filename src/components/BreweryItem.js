import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class BreweryItem extends Component
{
	render() 
	{
		return (
			<div className = 'content-wrapper' >
				
				<div>
					<Link to = {`/brewery/${this.props.brewery.id}`}  > 
						<h3> 
							{ this.props.brewery.name } 
						</h3>
						<h4>
							{ this.props.brewery.brewery_type }
						</h4>
						<h4>
							{ this.props.brewery.street + ', ' + this.props.brewery.city + ', ' + this.props.brewery.state + ' ' + this.props.brewery.postal_code }
						</h4>
					</Link>
				</div>

				<div>
					<a href = { this.props.brewery.website_url } target = '_blank' rel = 'noopener noreferrer' >
						Website
					</a>
				</div>
				
			</div>
		);
	}
}

export default BreweryItem