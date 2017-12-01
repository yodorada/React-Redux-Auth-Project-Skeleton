import React, { Component } from 'react';
import cssVars from '../assets/export.css';
import AppMessage from '../utils/AppMessage';
import LoadingBar from 'react-redux-loading-bar';
import './styles/all.css';
import Logo from '../assets/yo.png';



const loadingBarStyle = {
  backgroundColor: cssVars.brandPrimary,
  height: '3px'
};


class Scaffolding extends Component {

  render() {
    
    return (
      <div className="scaffolding" id="scaffolding">
        <AppMessage />
        <LoadingBar style={loadingBarStyle} showFastActions />

        <div id="wrapper">
          <div id="inner">
            <div id="logo">
            <img src={Logo} className="yodoradalogo" alt="logo" />
            </div>
            <div id="appcontent">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>

    );

  }

}



export default Scaffolding
