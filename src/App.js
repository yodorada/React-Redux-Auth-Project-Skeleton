import React, { Component } from 'react';
import routes from './routes';
import { Scaffolding } from './views';
import AppController from './utils/AppController';

import './views/styles/scaffolding.css';

class App extends Component {
  render() {
  return (
    <div>
    <AppController />
    <Scaffolding>
      <div id="routes">
        {routes}
      </div>
    </Scaffolding>
    </div>
    );
  }
}

export default App;