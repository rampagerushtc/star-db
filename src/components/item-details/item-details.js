import React, { Component } from 'react';

import './item-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorButton from '../error-button';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  )
}

export {
  Record
};

export default class ItemDetails extends Component {

  

  swapiService = new SwapiService();

  state = {
    item: null,
    loading: false,
    image: null
  };

  children = this.props.children;

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId ||
        this.props.getData !== prevProps.getData) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => {
        this.setState({ item, loading: false, image: getImageUrl(item) });
      })
  }

  render() {
    const spinner = this.state.loading ? <Spinner /> : null;
    const itemView = !this.state.loading ? <ItemView children={this.children}
                                                     item={this.state.item}
      image={this.state.image} /> : null;
    return (
      <div>
        {itemView}
        {spinner}
      </div>
    )
  }
}

const ItemView = ({ item, image, children }) => {
  if (!item) {
    return <span>Select a itemId from a list</span>;
  }
  const { name } = item;
  return (    
    <div className="item-details card">
      <img alt="item" className="item-image"
        src={image} />

      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <ul className="list-group list-group-flush">
          { React.Children.map(children, (child) => {
            return React.cloneElement(child, { item } );
          })}
        </ul>
        <ErrorButton />
      </div>
    </div>
  )
}
