import React, {Component} from 'react';
import Header from '../header';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import RandomPlanet from '../random-planet';
import './app.css';

//import PlanetDetails from '../planet-details';

export default class App extends Component {
    state = {
        showRandomPlanet: true
    }

toggleRandomPlanet = () => {
    this.setState((state)=>{
        return {
            showRandomPlanet: !state.showRandomPlanet
        }
    });
}



    render() {
        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
        return (
            <div>
                <Header />
                {planet}
                <button className="toggle-planet btn btn-warning"
                        onClick={this.toggleRandomPlanet}>
                    Toggle Random Planet
                    </button>
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList />
                    </div>
                </div>
                <div className="col-md-6">
                    <PersonDetails />
                </div>
    
            </div>
        )
    }
    
}
