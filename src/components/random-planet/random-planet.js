import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner';

import './random-planet.css';

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();
    state = {
        planet: {},
        loading: true
    };
    constructor() {
        super();
        this.updatePlanet();
    }

<<<<<<< HEAD
    onPlanetLoaded = (planet) => {
        this.setState({ planet });
    }
=======
onPlanetLoaded = (planet) => {
    this.setState({
        planet, 
        loading: false
    });
}
>>>>>>> 4078f0a3a869b69b4e71b0e832839f9204e70739


    updatePlanet() {
        const id = Math.floor(Math.random() * 25) + 1;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded);
    }



    render() {
        const { planet, loading } = this.state;

        const spinner = loading ? <Spinner /> : null
        const content = !loading ? <PlanetView planet={planet}/> : null
       
        return (
            <div className="col-md-6">
                <div className="random-planet jumbotron rounded">
<<<<<<< HEAD
                    <img alt="planet" className="planet-image"
                        src={`https://starwars-visualguide.com/assets/img/planets/${this.state.planet.id}.jpg`}></img>
=======
                    {spinner}
                    {content}
                </div>
            </div>

        )
    }
}

const PlanetView = ({planet}) => {
>>>>>>> 4078f0a3a869b69b4e71b0e832839f9204e70739

    const { id, name, population, rotationPeriod, diameter } = planet;

    return (
        <React.Fragment>
            <img  className="planet-image" alt="planet"
                        src={`https://starwars-visualguide.com/assets/img/planets/${ id }.jpg`}></img>
                    <div>
                        <h4>{name}</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <span className="term">Population</span>
                                <span>{population}</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Rotation Period</span>
                                <span>{rotationPeriod}</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Diameter</span>
                                <span>{diameter}</span>
                            </li>
                        </ul>
                    </div>
        </React.Fragment>
    )
}