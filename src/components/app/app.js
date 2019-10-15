import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StarshipDetails } from '../sw-components';

export default class App extends Component {


    state = {
        swapiService: new SwapiService(),
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
        return (
            <div>
                <SwapiServiceProvider value={this.state.swapiService} >
                    <Router>
                        <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange} />
                        <RandomPlanet />

                        <Route path="/" render={()=><h2>Welcome to StarDB</h2>} 
                                        exact />
                        <Route path="/people" render={()=><h2>People</h2>} 
                                        exact />
                        <Route path="/people" component= {PeoplePage} />
                        <Route path="/planets" render={()=><h2>Planets</h2>} 
                                        exact />
                        <Route path="/planets" component= {PlanetsPage} />
                        <Route path="/starships" exact render={()=><h2>Starships</h2>} 
                                        exact />
                        <Route path="/starships" exact component= {StarshipsPage} />
                        <Route path="/starships/:id" 
                               render= {({match}) => {
                               const {id} = match.params;
                               return <StarshipDetails itemId={id} />
                               } 
                            } />
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </div>
        )
    }

}
