import React from 'react';
import Header from 'components/Header';

const Login = () => (
  <div>
    <Header />
    <form>
      <label htmlFor="email">
        Email address
        <input id="email" type="email" placeholder="Enter email" />
      </label>
      <label htmlFor="password">
        Password
        <input id="password" type="password" placeholder="Password" />
      </label>
      <button type="submit">Submit</button>
    </form>
  </div>
);

export default Login;
