import React, { Component } from 'react';
import { PlanetDetails, PlanetList } from '../sw-components';
import Row from '../row';

export default class PlanetsPage extends Component {
    state = {
        selectedItem: 2
    }

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem });
    }
    render() {
        const { selectedItem } = this.state;

        return (
            <Row
                left={<PlanetList onItemSelected={this.onItemSelected}/>}
                right={<PlanetDetails itemId={selectedItem} />}
            />
        );
    }
}