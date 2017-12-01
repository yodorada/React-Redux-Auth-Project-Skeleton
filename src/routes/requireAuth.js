import React from 'react';
import { connect } from 'react-redux';
import { checkUserAuth } from '../actions';

export function requireAuth(Component) {

    class AuthenticatedComponent extends React.Component {

        componentWillMount() {
            if(this.props.doAuth && this.props.isAuthenticating!==true) {
                this.props.checkAuth();
            }
        }
        render() {
            return (
                <div>
                    {this.props.isAuthenticated === true
                        ? <Component {...this.props}/>
                        :null
                    }
                </div>
            )
        }
    }

    const mapStateToProps = (state) => ({
        isAuthenticated: state.auth.isAuthenticated,
        isAuthenticating: state.auth.isAuthenticating,
        doAuth: state.auth.doAuth,
        pathname: state.routing.location.pathname
    });

    const mapDispatchToProps = (dispatch) => {
      return {
        checkAuth: () => {
          checkUserAuth()(dispatch)
        }
      }
    }

    return connect(
      mapStateToProps,
      mapDispatchToProps
    )(AuthenticatedComponent);

}