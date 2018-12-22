import React from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalizeStyle from 'styles/global-styles';
import theme from 'styles/theme';

import App from 'components/App';

const AppBody = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalizeStyle />
      <App />
    </React.Fragment>
  </ThemeProvider>
);

export default AppBody;
