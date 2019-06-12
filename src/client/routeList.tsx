import { h } from 'preact';
import Router from 'preact-router';
import AsyncRoute from 'preact-async-route';

import Home from './pages/home';

const RouteList = (): JSX.Element => (
    <Router>
        <Home path="/" />
        <AsyncRoute path="/login" getComponent={() => import('./pages/login').then(module => module.default)} />
    </Router>
);

export default RouteList;
