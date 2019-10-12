import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

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
        swapiService: new DummySwapiService(),
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

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    }

    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }
        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

        const { getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage,
            getAllPeople,
            getAllPlanets } = this.state.swapiService;

        return (
            <div>
                <SwapiServiceProvider value={this.state.swapiService} >
                    <Header onServiceChange={this.onServiceChange} />
                    {planet}
                    <div className="row mb2 button-row">
                        <button className="toggle-planet btn btn-warning btn-lg"
                            onClick={this.toggleRandomPlanet}>
                            Toggle Random Planet
                        </button>
                        <ErrorButton />
                    </div>
                    <PersonDetails itemId={11} />
                    <PlanetDetails itemId={2} />
                    <StarshipDetails itemId={5} />

                    <PersonList />
                    <StarshipList />
                    <PlanetList />
                </SwapiServiceProvider>
            </div>
        )
    }

}
