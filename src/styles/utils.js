import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

// sbTheme
const withSbTheme = Component => () => (
  <ThemeProvider theme={theme}>
    <Component />
  </ThemeProvider>
);

export default withSbTheme;
