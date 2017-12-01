import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/login';
import ReactTimeout from 'react-timeout';


class LogoutView extends React.Component {
  constructor(props) {
    super(props);
    this.goLogout = this.goLogout.bind(this);
    this.goReset = this.goReset.bind(this);
    this.state = {logout:false};
  }

  goReset() {
    // this.props.dispatch(resetAll());
    this.props.setTimeout(this.goLogout,500);
  }

  goLogout() {
    this.props.dispatch(logout());
  }

  componentDidMount() {

    if(this.props.isLoggingOut && !this.state.logout) {
      this.setState({logout:true});
      this.props.setTimeout(this.goReset,100);
      
    }
  }

  render () {
      return (
          <div className="contentview logout"></div>
      );
  }

}

const mapStateToProps = (state) => {
  return {
    isLoggingOut: state.auth.isLoggingOut
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReactTimeout(LogoutView))

