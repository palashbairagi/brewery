import React, { Component } from 'react'
import Breweries from './Breweries'
import BreweryDetails from './BreweryDetails'
import { Switch, Route } from 'react-router-dom'

class BreweryContainer extends Component
{
    render()
    {
        return (
            <Switch>
                <Route exact path = '/' component = { Breweries } />
                <Route exact path = '/brewery' component = { Breweries } />
                <Route exact path = '/brewery/:id' component = { BreweryDetails } />
            </Switch>
        );
    }
}

export default BreweryContainer;

