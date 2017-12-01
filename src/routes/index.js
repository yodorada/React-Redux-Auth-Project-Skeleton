import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Redirect } from 'react-router';
import { LoginView, LogoutView, HomeView, CreditsView, NotFoundView } from '../views';

import RouteAuthenticated from './RouteAuthenticated';

//import AppConfig from '../config';


export default (
	<Switch>
		<Redirect exact from="/" to="home" />
		<Route exact path="/login" component={LoginView} />
		<RouteAuthenticated exact path="/home" component={HomeView} />
		<RouteAuthenticated exact path="/credits" component={CreditsView} />
		<RouteAuthenticated exact path="/logout" component={LogoutView} />
		<Route path="/404" component={NotFoundView} />
		<Route component={NotFoundView} />
	</Switch>
);
