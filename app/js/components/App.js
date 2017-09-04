import React, { Component } from 'react';
import 'css/main.scss';
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
      <div className='test-dev' >Hello World</div>
    );
  }

  storeDidUpdate = () => {
    this.setState = store.getState();
  }
}
