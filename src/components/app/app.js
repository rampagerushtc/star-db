import React, {Component} from 'react';
import Header from '../header';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import RandomPlanet from '../random-planet';
import './app.css';

//import PlanetDetails from '../planet-details';

export default class App extends Component {
    state = {
        showRandomPlanet: true,
        selectedPerson: 1
    }

toggleRandomPlanet = () => {
    this.setState((state)=>{
        return {
            showRandomPlanet: !state.showRandomPlanet
        }
    });
}

onPersonSelected = (id) => {
    this.setState( {
        selectedPerson: id
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
                        <ItemList onItemSelected={this.onPersonSelected}/>
                    </div>
                    <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
                </div>
                
    
            </div>
        )
    }
    
}
