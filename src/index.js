import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BaseLayout from './Components/Layout';



ReactDOM.render(


    <BrowserRouter>
        <BaseLayout>
            <Switch>
                <Route>
                </Route>
            </Switch>
        </BaseLayout>
    </BrowserRouter>





    ,document.getElementById('root'));
registerServiceWorker();
