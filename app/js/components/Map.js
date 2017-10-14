import React, { Component } from 'react';

// Esri Modules
import MapView from 'esri/views/MapView';
import EsriMap from 'esri/Map';

export default class Map extends Component {
  constructor () {
    super();
  }

  componentDidMount () {
    const map = new EsriMap({ basemap: 'gray-vector' });
    const view = new MapView({ map: map, container: this.refs.view });
  }

  render () {
    return (
      <div id='mapContainer'>
        <div id='map' ref='view' />
      </div>
    );
  }
}
