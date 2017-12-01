import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { requireAuth } from './requireAuth';
import { checkAuth } from '../utils';

const RouteAuthenticated =  ({ isAuthenticated, component, ...rest }) => {
  return (<Route render={(props) => {
    return !checkAuth(isAuthenticated) ? 
    (<Redirect to='/login' />) :
    (React.createElement(requireAuth(component), Object.assign({}, {...rest})));
  }} />)
};

RouteAuthenticated.propTypes = {
  isAuthenticated: PropTypes.bool
};


const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(
  mapStateToProps,
  null
)(RouteAuthenticated)
