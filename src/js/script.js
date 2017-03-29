
/* eslint-disable react/jsx-filename-extension */


 import React from 'react';
 import {render} from 'react-dom';
 import App from './containers/App';

 import nostaglieRadio from '../js/nostaglieRadio.js';
 import map from '../js/map.js';
 import lp from '../js/lp.js';
 import wandelingNaam from '../js/wandelingNaam.js';
 import dvd from '../js/dvd.js';

 const init = () => {

   nostaglieRadio();
   dvd();
   lp();
   wandelingNaam();
   map();
   render(
     <App />,
     document.querySelector(`.lyrics-react`)
   );
 };

 init();
