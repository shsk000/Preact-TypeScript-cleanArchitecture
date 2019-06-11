import { h, render } from 'preact';
import Router from 'preact-router';
import AsyncRoute from 'preact-async-route';

import Home from './pages/home';

const RouteList = () => (
    <Router>
        <Home path="/" />
        <AsyncRoute
            path="/login"
            getComponent={() => import('./pages/login').then(module => module.default)}
        />
    </Router>
)

export default RouteList;
