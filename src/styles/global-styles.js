import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

const Globalize = createGlobalStyle`
  /* Inject normalize.css globally */
  ${styledNormalize}

  /* GT America Font */
  @font-face {
    font-family: 'GT-America-Expanded-Black';
    src: url('/static/fonts/GT-America-Expanded-Black.ttf');
    font-weight: bold;
    font-style: normal;
  }

  /* Roboto Font */
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');

  *, *:after, *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    font-size: 16px;
    line-height: 20px;
    font-family: ${props => props.theme.fonts.body};
    color: ${props => props.theme.colors.black};
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a, button, input, select, textarea {
      -webkit-tap-highlight-color: transparent;
  }

  #__next {
    width: 100%;
    height: 100%;
  }

  button {
    background: none;
    border: none;
  }

  button:focus {
    outline: 0;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: ${props => props.theme.colors.linkColor};
  }

  a:hover {
    text-decoration: underline;
  }

  @media ${props => props.theme.breakpoints.maxTabletSmall} {
    .no-sroll--mobile-only {
      overflow: hidden;
    }
  }
`;

export default Globalize;
