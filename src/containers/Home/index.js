import React from 'react';
import Header from 'components/Header';

import Welcome from 'components/Welcome';

const Home = () => (
  <React.Fragment>
    <Header />
    <Welcome message="Welcome here :)" />
  </React.Fragment>
);

export default Home;
