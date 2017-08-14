import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Projects from './components/projects';
import App from "./components/app";

ReactDOM.render(

    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/projects" component={Projects}/>
                <Route path="/" component={App}/>
            </Switch>
        </div>
    </BrowserRouter>,
    document.querySelector(".container")
)