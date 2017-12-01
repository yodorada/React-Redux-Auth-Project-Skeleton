import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTimeout from 'react-timeout';
import { push } from 'react-router-redux';
import { doNewAuth } from '../actions/auth';
import { contentReset } from '../actions/content';
import LocalStorageUtils from './LocalStorageUtils';

const pathToClass = path => {
  return path.substr(1).split('/').join('-');
};


class AppController extends Component {
  constructor(props) {
    super(props);
    this.addReady = this.addReady.bind(this);
    this.addClassName = this.addClassName.bind(this);
    this.removeClassName = this.removeClassName.bind(this);
    this.addContentVisible = this.addContentVisible.bind(this);
    this.goNext = this.goNext.bind(this);
    
    this.state = {change: false, ready:false};
  }

  componentDidMount() {
    this.props.setTimeout(this.addReady, 200);
  }
  addReady() {
    this.setState({ready:true});
    this.addClassName('ready');
    this.props.setTimeout(this.addContentVisible, 200);
  }
  addContentVisible() {
    this.addClassName('contentvisible');
  }
  addClassName(str) {
    if(str==='') {
      return;
    }
    document.getElementById('scaffolding').classList.add(str);
  }
  removeClassName(str) {
    if(str==='') {
      return;
    }
    document.getElementById("scaffolding").classList.remove(str);
  }
  goNext() {
    this.props.dispatch(push(this.props.linkTo));
  }

  componentWillUpdate(nextProps, nextState) {
    if(this.props.linkTo!==nextProps.linkTo && nextProps.linkTo!=='' && !this.state.change) {
      
      this.setState({change:true});
      this.addClassName('change');
      this.removeClassName('contentvisible');
      this.props.setTimeout(this.goNext, 300);
    }
  }

  componentDidUpdate(prevProps, prevState) {
      if(this.props.pathname !== prevProps.pathname) {
        this.props.dispatch(doNewAuth());
        this.removeClassName(pathToClass(prevProps.pathname));
        this.addClassName(pathToClass(this.props.pathname));
       }
    if(this.state.change) {
      if(this.props.pathname === '/'+this.props.linkTo || prevState.isLoggingOut) {
        this.setState({change:false});
        this.removeClassName('change');
        this.props.setTimeout(this.addContentVisible, 200);
        this.props.dispatch(contentReset());
      }
    }
  }
  

  render() {

    return (
        <div id="appcontroller"></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pathname: state.routing.location.pathname,
    linkTo: state.content.link,
    isAuthenticated: state.auth.isAuthenticated
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
)(ReactTimeout(AppController))