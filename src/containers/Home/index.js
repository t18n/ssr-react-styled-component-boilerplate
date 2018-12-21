import React from 'react';
import { NavLink } from 'components/Navigation';

import Welcome from 'components/Welcome';

const Home = () => (
  <React.Fragment>
    <Welcome message="Welcome here :)" />
    <NavLink to="/login">Login</NavLink>
    <NavLink to="/404">404</NavLink>
    <NavLink to="/posts">Posts</NavLink>
  </React.Fragment>
);

export default Home;
