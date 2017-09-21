import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';



export default class NavBar extends Component {
    render(){
        return(

                <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                    <ul class="nav">
                      <li class="nav-item">
                        <NavLink class="nav-link active" to="#">BēânLoft</NavLink>
                      </li>
                      <li class="nav-item">
                        <NavLink class="nav-link" to="#">Products</NavLink>
                      </li>
                      <li class="nav-item">
                        <NavLink class="nav-link" to="#">Features</NavLink>
                      </li>
                      <li class="nav-item">
                        <NavLink class="nav-link" to="#section1">Pricing</NavLink>
                      </li>
                    </ul>
                </nav>






        )
    }
}
