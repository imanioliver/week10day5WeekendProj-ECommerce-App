import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BaseLayout from './Components/Layout';
import Home from './Components/Home';


ReactDOM.render(


    <BrowserRouter>
        <BaseLayout>
            <Switch>
                <Route exact path="/" component={Home}/>


            </Switch>
        </BaseLayout>
    </BrowserRouter>





    ,document.getElementById('root'));
registerServiceWorker();
