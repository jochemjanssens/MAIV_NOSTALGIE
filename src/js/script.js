/* eslint-disable react/jsx-filename-extension */

 import React from 'react';
 import {render} from 'react-dom';
 import App from './containers/App';

 const init = () => {

   render(
     <App />,
     document.querySelector(`.lyrics-react`)
   );

 };

 init();
