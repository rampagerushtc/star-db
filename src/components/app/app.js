import React, { Component } from 'react';
import Header from '../header';
import PeoplePage from '../people-page';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import RandomPlanet from '../random-planet';
import './app.css';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';


//import PlanetDetails from '../planet-details';

export default class App extends Component {

    swapiService = new SwapiService();
    state = {
        showRandomPlanet: true,
        hasError: false
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
        return (
            <div>
                <Header />
                {planet}
                <div className="row mb2 button-row">
                    <button className="toggle-planet btn btn-warning btn-lg"
                        onClick={this.toggleRandomPlanet}>
                        Toggle Random Planet
                </button>
                    <ErrorButton />
                </div>

                <PeoplePage getData={this.swapiService.getAllPeople} />

                {/* <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected}
                            getData={this.swapiService.getAllStarships}
                            renderItem={(item)=> (<span>{item.name}<button>!</button></span>)} />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}
                                        renderItem={(item)=> item.name} />
                    </div>
                </div> */}


            </div>
        )
    }

}
