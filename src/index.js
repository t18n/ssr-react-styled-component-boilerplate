import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import GlobalizeStyle from 'styles/global-styles';
import theme from 'styles/theme';

import App from 'components/App';

// **Attach** a React element into the **existing markup** via supplied container
// hydrate() is same as render(), but is used to hydrate (attach event listeners) a container
ReactDOM.hydrate(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalizeStyle />
        <App />
      </React.Fragment>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
