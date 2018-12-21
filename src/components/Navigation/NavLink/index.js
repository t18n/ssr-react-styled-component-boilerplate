import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const NavLink = ({ to, underline, ...rest }) => (
  <StyledNavLink to={to} underline={underline} {...rest} />
);

const StyledNavLink = styled(Link)`
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  display: ${props => props.display};
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
`;

NavLink.defaultProps = {
  display: 'inline',
  underline: false,
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  display: PropTypes.string,
  underline: PropTypes.bool,
};

export default NavLink;
