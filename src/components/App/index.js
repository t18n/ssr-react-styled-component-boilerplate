import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Helmet } from 'react-helmet';
import favicon from 'assets/images/favicon.png';

import Home from 'containers/Home';
import Login from 'containers/Login';
import Posts from 'containers/Posts';
import NotFound404 from 'containers/404';

import { RedirectWithStatus } from 'components/SSR';

// TODO: Add HOC Lazyloader using `react-loadable`. Wait for Babel 7 support release.
// import { Home, Login, NotFound404 } from './lazyLoader'

const router = () => (
  <React.Fragment>
    <Helmet>
      <link rel="icon" type="image/png" href={favicon} />
    </Helmet>

    <Switch>
      {/* Define component to be rendered for each URL */}
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/posts" component={Posts} />

      {/* Define Redirect logic if any */}
      <RedirectWithStatus httpStatus={301} from="/users" to="/" />
      <RedirectWithStatus httpStatus={302} from="/courses" to="/404" />

      {/* If url is not defined, go 404 */}
      <Route component={NotFound404} />

    </Switch>
  </React.Fragment>
);

export default router;
