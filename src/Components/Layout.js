import React, {Component} from 'react';
// import {NavLink} from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor';
import NavBar from './NavBar';
import '../styles/App.css';

export default class BaseLayout extends Component {
    render(){
        return(
            <div className="baseLayout">
            <NavBar/>
            <div>

            {this.props.children}


            <ScrollableAnchor id={'section1'}>
                <div id="pricing">
                    <p>We have the best prices</p>
                    <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>

                    </ul>
                </div>
            </ScrollableAnchor>
            </div>
        )
    }
}
