import React, { Component } from 'react';
import 'css/main.scss';

import Map from 'js/components/Map';
import MapControls from 'js/components/MapControls';

export default class App extends Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div>
        <Map />
        <MapControls />
      </div>
    );
  }
}
