import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './item-list.css';

export default class ItemList extends Component {

  state = {
    itemList: null
  }

  componentDidMount() {

    const { getData } = this.props

    getData()
      .then((itemList) => {
        this.setState({
          itemList
        });
      });
  }

  renderItems(arr) {
    return arr.map(({ id, name }) => {
      return (
        <li className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}          >
          {name}
        </li>
      );
    });
  }

  render() {

    const { itemList } = this.state;
    if (!itemList) {
      return (
        <ul className="item-list list-group">
          <li className="list-group-item">
            <Spinner />
          </li>

        </ul>
      )
    }

    const people = this.renderItems(itemList);

    return (
      <ul className="item-list list-group">
        {people}
      </ul>
    );
  }
}
