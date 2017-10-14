import React, { Component } from 'react';
import 'css/main.scss';
// Redux Store
import store from 'js/redux/store';

import Map from 'js/components/Map';

export default class App extends Component {
  constructor () {
    super();
    this.state = store.getState();
    console.log('Application Initial State', this.state);
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(this.storeDidUpdate);
  }

  render () {
    return (
      <Map />
    );
  }

  storeDidUpdate = () => {
    this.setState = store.getState();
  }
}
