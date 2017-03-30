
/* eslint-disable react/jsx-filename-extension */


 import React from 'react';
 import {render} from 'react-dom';
 import LyricsApp from './containers/LyricsApp';
 import CoverApp from './containers/CoverApp';

 import nostaglieRadio from '../js/nostaglieRadio.js';
 import map from '../js/map.js';
 import lp from '../js/lp.js';
 import wandelingNaam from '../js/wandelingNaam.js';
 import dvd from '../js/dvd.js';
 import nav from '../js/nav.js';

 const init = () => {
   nostaglieRadio();
   dvd();
   lp();
   wandelingNaam();
   map();
   nav();
   render(
     <LyricsApp />,
     document.querySelector(`.lyrics-react`)
   );
   render(
     <CoverApp />,
     document.querySelector(`.coverimg`)
   );
 };

 init();
