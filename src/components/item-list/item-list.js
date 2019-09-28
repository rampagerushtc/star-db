import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './item-list.css';

export default class ItemList extends Component {

  state = {
    itemList: null
  }

  componentDidMount() {

    const { getData } = this.props;

    getData()
      .then((itemList) => {
        this.setState({
          itemList
        });
      });
  }

  renderItems(arr) {
    return arr.map(( item ) => {
      const { id } = item;
      console.log(1, this.props.children);
      const label = this.props.children(item);
      return (
        <li className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}>
          {label}
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
    console.log(people);
    return (
      <ul className="item-list list-group">
        {people}
      </ul>
    );
  }
}
