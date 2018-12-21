import React from 'react';
import express from 'express';

import serialize from 'serialize-javascript';
import { StaticRouter, matchPath } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';

import Routes from 'routes';

import App from 'components/App';
import Markup from 'template';

const PORT = process.env.PORT || 3003;

const app = express();

app.use(express.static('../dist'));

app.get('/*', (req, res) => {
  // Match current route and check if loadData is required
  const currentRoute = Routes.find(route => matchPath(req.url, route)) || {};
  const promise = (currentRoute.loadData) ? currentRoute.loadData() : Promise.resolve(null);

  promise.then((data) => {
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
        <App />
      </StaticRouter>,
    );

    // https://reacttraining.com/react-router/web/guides/server-rendering
    if (context.url) {
      // Somewhere a `<Redirect>` was rendered
      return res.redirect(context.status, context.url);
    }
    // Sends the HTTP response.
    return res.send(
      Markup({
        body,
        routeData,
      }),
    );


    // if (context.status === 404) res.status(404);
    // if (context.url) return res.redirect(301, context.url);
  });
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});
