import React from 'react';
import { NavLink } from 'components/Navigation';

const Header = () => (
  <React.Fragment>
    <NavLink to="/login">Login</NavLink>
    <NavLink to="/404">404</NavLink>
    <NavLink to="/posts">Posts</NavLink>
  </React.Fragment>
);

export default Header;
