/**
 * UserComponent displays the name of one user
 */

import React from 'react';
import Alert from 'react-bootstrap/Alert'
import { LinkContainer } from 'react-router-bootstrap'
import PropTypes from 'prop-types';

function UserComponent(props) {
  let link;
  link = "/user/" + props.user;

  return (
    <LinkContainer to={link} style={{ color: props.color }}>
      <Alert variant="dark">{props.user}</Alert>
    </LinkContainer>
  );
}

UserComponent.propTypes = {
  user: PropTypes.string,
  color: PropTypes.string
}

export default UserComponent;