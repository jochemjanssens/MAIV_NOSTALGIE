
/* eslint-disable react/jsx-filename-extension */
 import map from '../js/map.js';
 import React from 'react';
 import {render} from 'react-dom';
 import App from './containers/App';
 import nostaglieRadio from '../js/nostaglieRadio.js';

 const init = () => {
   nostaglieRadio();
   map();
   render(
     <App />,
     document.querySelector(`.lyrics-react`)
   );
 };

 init();
