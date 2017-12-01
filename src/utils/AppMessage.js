import React, { Component } from 'react';
import { Notification } from 'react-notification';
import { connect } from 'react-redux';
import { resetMessage } from '../actions/message';
import ReactTimeout from 'react-timeout';

class AppMessage extends Component {
  constructor(props) {
    super(props);
    this.dismiss = this.dismiss.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if(nextProps.isActive===true) {
      this.props.setTimeout(this.dismiss, 2000);
    }
  }

  dismiss() {
    this.props.dispatch(resetMessage())
  }

  render() {

    return (
        <Notification
          isActive={this.props.isActive}
          message={this.props.message}
          barStyle={{fontSize:'14px',top:'1rem',bottom:'auto'}}
          activeBarStyle={{top:'1rem',bottom:'auto'}}
        />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.notification.message,
    isActive: state.notification.isActive,
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
)(ReactTimeout(AppMessage))