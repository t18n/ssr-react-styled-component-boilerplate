import React from 'react';
import { HttpStatus } from 'components/SSR';
import Header from 'components/Header';

const NotFound404 = () => (
  <HttpStatus httpStatus={404}>
    <Header />
    <div>
      <h1>Oops, nothing here!</h1>
    </div>
  </HttpStatus>
);

export default NotFound404;
