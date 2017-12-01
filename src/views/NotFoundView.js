import React from 'react';

import { Redirect } from 'react-router';



class NotFoundView extends React.Component {

    constructor(props) {
      super(props);
      this.goHome = this.goHome.bind(this);
      this.state = {
        home: false
      };
    }
    goHome() {
        this.setState({
        home: true
      });
    }

    render () {
        return (
            <div className="content">
            {
                this.state.home===true?
                <Redirect to="home" />
                :
                <div>
                    <h2 style={{margin:'30px 0 20px'}}>Der von Ihnen geforderte Inhalt wurde nicht gefunden.</h2>
                    <div style={{textAlign:'center'}}>
                    <button className="loginbutton" onClick={this.goHome}>Zur Startseite</button>
                    </div>
                </div>
            }
            </div>
        );
    }

}

export default NotFoundView