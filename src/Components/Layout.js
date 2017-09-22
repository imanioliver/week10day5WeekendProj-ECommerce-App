import React, {Component} from 'react';
// import {NavLink} from 'react-router-dom';
import NavBar from './NavBar';
import '../styles/App.css';

export default class BaseLayout extends Component {
    render(){
        return(
            <div className="baseLayout">
            <NavBar/>
                <div className="kids">

                {this.props.children}


                </div>
            </div>
        )
    }
}
