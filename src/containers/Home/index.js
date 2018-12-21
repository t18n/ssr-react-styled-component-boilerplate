import React from 'react';
import { Link } from 'react-router-dom';

import Welcome from 'components/Welcome';

const Home = () => (
  <React.Fragment>
    <Welcome message="Welcome here :)" />
    <Link to="/login">Login</Link>
    <Link to="/404">404</Link>
    <Link to="/posts">Posts</Link>
  </React.Fragment>
);

export default Home;
