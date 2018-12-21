import React from 'react';
import express from 'express';

import serialize from 'serialize-javascript';
import { StaticRouter, matchPath } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';

import routes from 'routes';

import { ThemeProvider, ServerStyleSheet } from 'styled-components';
import GlobalizeStyle from 'styles/global-styles';
import theme from 'styles/theme';

import App from 'components/App';
import Markup from 'template';

const PORT = process.env.PORT || 3003;
const app = express();

app.use(express.static('../dist'));

app.get('/*', (req, res) => {
  // Match current route and check if loadData is required
  const currentRoute = routes.find(route => matchPath(req.url, route)) || {};
  const promise = (currentRoute.loadData) ? currentRoute.loadData() : Promise.resolve(null);

  promise.then((data) => {
    // Prepare out stylesheets and apply to DOM
    const stylesheet = new ServerStyleSheet();
    const styles = stylesheet.getStyleTags(); // Get all the tags from the sheet

    // Prepare data
    const context = { data };
    const routeData = serialize(data);

    // Render the app to HTML String.
    // Use this method to generate HTML on the server and
    // send the markup down on the initial request for faster page loads
    // and to allow search engines to crawl your pages for SEO purposes
    const body = ReactDOMServer.renderToString(
      // StaticRouter uses for server-side rendering instead of <BrowserRouter>
      // We pass in the `context` for needed information to use in the page
      // and  requested url from the server so the routes can match
      <StaticRouter context={context} location={req.url}>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <GlobalizeStyle />
            <App />
          </React.Fragment>
        </ThemeProvider>
      </StaticRouter>,
    );

    // https://reacttraining.com/react-router/web/guides/server-rendering
    if (context.url) {
      // Expecting <Redirect /> component defined somewhere inside switch
      res.redirect(context.status, context.url);
    }
    // Sends the HTTP response.
    res.send(Markup({ body, styles, routeData }));
  }).catch((error) => {
    console.log(error);
    res.sendStatus(501);
  });
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});
