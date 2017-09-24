import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BaseLayout from './Components/Layout';
import Home from './Components/Home';
import Contact from './Components/Contact'
import Blueprints from './Components/Blueprints'
import Shells from './Components/Shells'



ReactDOM.render(


    <BrowserRouter>
        <BaseLayout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/blueprints" component={Blueprints}/>
                <Route path="/shells" component={Shells}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
        </BaseLayout>
    </BrowserRouter>





    ,document.getElementById('root'));
registerServiceWorker();
