/* eslint-disable react/jsx-filename-extension */

 import React from 'react';
 import {render} from 'react-dom';
 import App from './containers/App';

 import nostaglieRadio from '../js/nostaglieRadio.js';

 const init = () => {
   nostaglieRadio();

   render(
     <App />,
     document.querySelector(`.lyrics-react`)
   );

 };

 init();
