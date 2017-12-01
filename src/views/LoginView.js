import React from 'react';

import InputField from '../components/atoms/InputField';
import { loginUser } from '../actions';
import { connect } from 'react-redux';
import { contentChange } from '../actions/content';

import cssVars from '../assets/export.css';


class LoginView extends React.Component {
	constructor(props) {
	    super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.goHome = this.goHome.bind(this);
	    this.state = {auth: false, username:'', password:''};
	}

  handleChange(e) {
    var tmp = {};
      tmp[e.target.name] = e.target.value;
      this.setState(tmp);
  }

  goHome() {
    this.props.dispatch(contentChange("home"));
  }


  componentWillUpdate(nextProps, nextState) {
    if(nextProps.isAuthenticated) {
      this.goHome();
    }
  }

	handleSubmit(e) {
		e.preventDefault();
    if(!this.props.isAuthenticating && !this.props.isAuthenticated && this.state.username!=='' && this.state.password!=='') {
      this.setState({auth:true});
      this.props.submitClick(this.state.username, this.state.password);
    }
    return false;
	}

  render () {
      return (
          <div className="contentview login">
            <form className={`form${this.props.isAuthenticating===true?" doauth":""}${this.props.isAuthenticated===true?" isauth":" notauth"}${this.state.username!=='' && this.state.password!==''?" filled":""}`} onSubmit={this.handleSubmit}>
              <h2>Protected Area</h2>
              <InputField label="Username" name="username" onChange={this.handleChange} />
              <InputField label="Password" name="password" type="password" onChange={this.handleChange} />
            	<button className="loginbutton">{this.props.isAuthenticating===true?"Checking data":this.props.isAuthenticated===true?"OK":this.state.username!=='' && this.state.password!==''?"Login »":"Input login data"}</button>
            </form>
          </div>
      );
  }

}


const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isAuthenticating: state.auth.isAuthenticating
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
    submitClick: (username, password) => {
      loginUser(username, password)(dispatch)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView)
