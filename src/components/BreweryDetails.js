import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GoogleMapReact from 'google-map-react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NotFound from './NotFound'

class BreweryDetails extends Component
{
	state = {
		is_loading: true,
		brewery: {}
	}

    render() 
	{
		if ( this.state.is_loading === true )
		{
			return (
				<Row>
					<Col>
						<div className = 'content-wrapper' >
							Loading...
						</div>
					</Col>
				</Row>
			);
		}
		else if ( this.state.brewery !== null )
		{
			return (
				<Row>
					<Col>
						<div className = 'content-wrapper' >
							<h3> 
								{ this.state.brewery.name } 
							</h3>
							<h4>
								{ this.state.brewery.street + ', ' + this.state.brewery.city + ', ' + this.state.brewery.state + ' ' + this.state.brewery.postalCode }
							</h4>
							<div className = 'map' >
								<GoogleMapReact bootstrapURLKeys = {{ key: 'AIzaSyBlBhqUPHPNTpc31_ombufYs_klgwfX6Vc' }}
									center = {{
										lat: parseFloat(this.state.brewery.latitude),
										lng: parseFloat(this.state.brewery.longitude)
									}}
									defaultZoom = { 10 } >
								</GoogleMapReact>
							</div>
						</div>
						<Link to = {`/brewery/`} >
							<div className = 'back' >
								Back
							</div>
						</Link> 
					</Col>
				</Row>
			);
		}
		else{
			return <NotFound />
		}
	}

    componentWillMount()
	{
		if( !isNaN(this.props.match.params.id) )
		{
			var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
				targetUrl = 'https://brewery-api-v1.herokuapp.com/api/breweries/' + this.props.match.params.id
		
			fetch( proxyUrl + targetUrl )
			.then(res => res.json())
			.then((data) => {
				this.setState({ 
					is_loading : false,
					brewery: data
				})
			})
			.catch( err => {
				this.setState({
					is_loading: false, 
					brewery: null
				})
			})
		}
		else
		{
			this.setState({
				is_loading: false, 
				brewery: null
			})
		}
	} 

}

export default BreweryDetails