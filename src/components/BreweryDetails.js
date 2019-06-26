import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GoogleMapReact from 'google-map-react'

export class BreweryDetails extends Component
{
	state = {
		brewery: {
			name : "",
			street : "",
			city : "",
			state : "",
			postal_code : "",
			latitude : 40.6971494,
			longitude : -74.2598655
		}
	}

    render() 
	{
		return (
            <div>
				<h3> 
					{ this.state.brewery.name } 
				</h3>
				<h4>
					{ this.state.brewery.street + ', ' + this.state.brewery.city + ', ' + this.state.brewery.state + ' ' + this.state.brewery.postal_code }
				</h4>
				<div style = {{ height: '300px', width: '300px' }} >
                   <GoogleMapReact bootstrapURLKeys = {{ key: 'AIzaSyBlBhqUPHPNTpc31_ombufYs_klgwfX6Vc' }}
                        center = {{
                            lat: parseFloat(this.state.brewery.latitude),
                            lng: parseFloat(this.state.brewery.longitude)
                           }}
                        defaultZoom = { 10 } >
					</GoogleMapReact>
				</div>
				<Link to = {`/brewery/`} >
					Back
				</Link> 

			</div>
		);
	}

    componentWillMount()
	{
		fetch('https://api.openbrewerydb.org/breweries/' + this.props.match.params.id )
		.then(res => res.json())
		.then((data) => {
			this.setState({ 
				brewery: data
			})
		})
		.catch(console.log)
	} 

}

export default BreweryDetails