import '@babel/polyfill';

import React from 'react';
import express from 'express';
import chalk from 'chalk';
import path from 'path';

import serialize from 'serialize-javascript';
import { StaticRouter, matchPath } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import routes from 'routes';
import Markup from 'template';
import AppBody from 'components/AppBody';

const PORT = process.env.PORT || 3003;
const app = express();

// const testError = () => { throw (new Error('This is a Test error')); };

app.use(express.static('../dist'));

app.get('/*', (req, res, next) => {
  // Match current route and check if loadData is required
  const currentRoute = routes.find(route => matchPath(req.url, route)) || {};
  const promise = (currentRoute.loadData) ? currentRoute.loadData() : Promise.resolve(null);

  promise.then((data) => {
    // Prepare data
    const context = { data };
    const routeData = serialize(data);

    // Prepare out stylesheets and apply to DOM
    const stylesheet = new ServerStyleSheet();

    // Render the app to HTML String.
    // Use this method to generate HTML on the server.
    // StaticRouter uses for server-side rendering instead of <BrowserRouter>
    // We pass in the `context` for needed information to use in the page
    // and requested url from the server so the routes can match
    const body = ReactDOMServer.renderToString(
      <StaticRouter context={context} location={req.url}>
        <StyleSheetManager sheet={stylesheet.instance}>
          <AppBody />
        </StyleSheetManager>
      </StaticRouter>,
    );

    // Can only be called after your element is rendered
    const styles = stylesheet.getStyleTags(); // Get all the tags from the sheet

    // https://reacttraining.com/react-router/web/guides/server-rendering
    if (context.url) res.redirect(context.status, context.url);

    // Sends the HTTP response.
    res.send(Markup({ body, styles, routeData }));
  })
    // https://www.bennadel.com/blog/3275-you-can-continue-to-process-an-express-js-request-after-the-client-response-has-been-sent.htm
    // At this point, the CLIENT RESPONSE has been sent; but, that doesn't mean
    // that the Express.js request has completed. We can continue to process the
    // request, handling ASYNCHRONOUS aspects of the the client's request.
    // --
    // CAUTION: Since we're serializing the calls, essentially, it means that an
    // error in one will likely prevent the next one from being invoked. As such,
    // this approach may not always be appropriate.
    // .then(enqueueSomething)
    // .then(testError)
    // If we hook all of this into the next() callback, it means that all of our
    // errors can be handled by the global error handler - even errors that occur
    // after the response has been sent to the client.
    .catch(next);
});

// SEO
const robotsTxtOptions = {
  root: path.join(__dirname, '../config'),
  headers: {
    'Content-Type': 'text/plain;charset=UTF-8',
  },
};

app.get('/robots.txt', (req, res) => (
  res.status(200).sendFile('robots.txt', robotsTxtOptions)
));

// Setup the Express global error handler.
app.use((err, req, res) => {
  console.log(chalk.red.bold(`ERROR \n===== \n${err}`));

  // Because we hooking post-response processing into the global error handler, we
  // get to leverage unified logging and error handling; but, it means the response
  // may have already been committed, since we don't know if the error was thrown
  // PRE or POST response. As such, we have to check to see if the response has
  // been committed before we attempt to send anything to the user.
  if (!res.headersSent) {
    res.status(500).send('Sorry - something went wrong. We\'re digging into it.');
  }
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});
