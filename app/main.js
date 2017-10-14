import React from 'react';
import ReactDOM from 'react-dom';

import App from 'js/components/App';

import { lazyLoadCSS } from 'js/utilities/loaders';

// Load Esri CSS
lazyLoadCSS('//js.arcgis.com/4.5/esri/css/main.css');

const mountPoint = document.getElementById('application-mount');
ReactDOM.render(<App />, mountPoint);
