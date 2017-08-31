import React, { Component } from 'react';

// Redux Store
import store from 'js/redux/store';

export default class App extends Component {
  constructor () {
    super();
    this.state = store.getState();
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(this.storeDidUpdate);
  }

  render () {
    return (
      <div>Hello World</div>
    );
  }

  storeDidUpdate = () => {
    this.setState = store.getState();
  }
}
