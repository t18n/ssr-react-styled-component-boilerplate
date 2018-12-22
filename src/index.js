import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import AppBody from 'components/AppBody';


// **Attach** a React element into the **existing markup** via supplied container
// hydrate() is same as render(), but is used to hydrate (attach event listeners) a container
ReactDOM.hydrate(
  <BrowserRouter>
    <AppBody />
  </BrowserRouter>,
  document.getElementById('root'),
);
