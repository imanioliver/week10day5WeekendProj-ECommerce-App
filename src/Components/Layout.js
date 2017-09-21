import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor';
import NavBar from './NavBar';
import '../styles/App.css';

export default class BaseLayout extends Component {
    render(){
        return(
            <div className="theNav">
            <NavBar/>
            <ScrollableAnchor id={'section1'}>
                <div id="pricing">
                    <p>We have the best prices</p>
                </div>
            </ScrollableAnchor>
            </div>
        )
    }
}
