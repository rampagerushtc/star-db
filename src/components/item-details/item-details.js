import React, { Component } from 'react';

import './item-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorButton from '../error-button';

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    itemId: null,
    loading: true
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData} = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
        .then((itemId) => {
        this.setState({ itemId, loading: false });
      })
  }

  render() {
    console.log(`render()`);
    console.log(this.state);
    const spinner = this.state.loading ? <Spinner /> : null;
    const itemView = !this.state.loading ? <ItemView itemId={this.state.itemId} /> : null;
    return (
      <div className="item-details card">
        {itemView}
        {spinner}
      </div>
    )
  }
}


const ItemView = ({ itemId }) => {
  console.log(111, itemId);
  if (!itemId) {
    return <span>Select a itemId from a list</span>;
  }
  const { id, name, gender, birthYear, eyeColor } = itemId;
  return (
    <React.Fragment>
      <img alt="planet" className="item-image img-fluid"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>

        </ul>
        <ErrorButton />
      </div>
    </React.Fragment>

  )
}
