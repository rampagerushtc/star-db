import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorIndicator from '../error-indicator';
import Row from '../row';


export default class PeoplePage extends Component {

    state = {
        selectedPerson: 3,
        hasError: false
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    componentDidCatch() {
        this.setState({ hasError: true })
    };

    render() {

        const { getData } = this.props;
        if (this.state.hasError) {
            return (
                <ErrorIndicator />
            )
        }

    const itemList = (
        <ItemList
          onItemSelected={this.onPersonSelected}
          getData={this.swapiService.getAllPeople}>{3131}</ItemList>
      );

        const personDetails = (
            <ItemDetails item={this.state.selectedPerson} />
        );

        return (
            <Row left={itemList} right={personDetails} />
        )
    }
}