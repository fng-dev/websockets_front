import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Chat from '../pages/Chat/Chat';
import Home from '../pages/Home/Home';


const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/chat" component={Chat} />
                <Route path="/" component={() => (<h1>404</h1>)} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;