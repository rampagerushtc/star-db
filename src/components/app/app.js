import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import Row from '../row';


import { SwapiServiceProvider } from '../swapi-service-context';


import {
    PersonDetails,
    StarshipDetails,
    PlanetDetails,
    PersonList,
    PlanetList,
    StarshipList
} from '../sw-components';

import './app.css';

export default class App extends Component {


    state = {
        swapiService: new SwapiService(),
        showRandomPlanet: true,
        hasError: false
    };

    onServiceChange = () => {

        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ?
                DummySwapiService : SwapiService;

            console.log(`Switched to ${Service}`);
            return {
                swapiService: new Service()
            }
        })
    }

    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }
        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

        return (
            <div>
                <SwapiServiceProvider value={this.state.swapiService} >
                    <Header onServiceChange={this.onServiceChange} />
                    {planet}

                    <Row 
                        left={<PersonList />}
                        right={<PersonDetails itemId={11} />}
                    />
                    <Row 
                        left={<PlanetList />}
                        right={<PlanetDetails itemId={2} />}
                    />
                    <Row 
                        left={<StarshipList />}
                        right={<StarshipDetails itemId={5} />}
                    />
                </SwapiServiceProvider>
            </div>
        )
    }

}
