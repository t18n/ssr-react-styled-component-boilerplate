import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Helmet } from 'react-helmet';
import favicon from 'assets/images/favicon.png';

import Home from 'containers/Home';
import Login from 'containers/Login';
import NotFound404 from 'containers/404';

// TODO: Add HOC Lazyloader using `react-loadable`. Wait for Babel 7 support release.
// import { Home, Login, NotFound404 } from './lazyLoader'

const router = () => (

  // Using HashRouter to allow entering an URL directly, you can try to find some workaround for
  // BrowserRouter or Router with `history`. This aim to keep the code short and simple.
  <BrowserRouter>
    <div>
      <Helmet>
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route component={NotFound404} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default router;
