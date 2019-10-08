import React, { Component } from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData = (View, getData) => {
    return class extends Component {
  
      state = {
        data: null
      }
  
      componentDidMount() {
  
        getData()
          .then((data) => {
            this.setState({
              data
            });
          });
      }
  
      render() {
        const { data } = this.state;
  
        if (!data) {
          return (
            <ul className="item-list list-group">
              <li className="list-group-item">
                <Spinner />
              </li>
            </ul>
          )
        }
  
        return <View {...this.props} data={data} />
      }
    };
  }

  export default withData;