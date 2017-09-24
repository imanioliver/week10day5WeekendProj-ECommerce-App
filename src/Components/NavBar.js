import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class NavBar extends Component {


    render(){

        let styleLink = {
            backgroundColor: "white",
            textDecoration: "none"
        }

        return(



                <nav id="theNav" className="newNavClass" >
                    <ul className="nav">
                      <li className="nav-item">
                        <NavLink className="nav-link active" to="/" style={styleLink}> Bēân <span id="loft"> loft </span></NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About Us</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/blueprints">Blueprints</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/shells">Shells</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/roofs">Roofs</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href='#section1'> Go to section 1 </a>
                      </li>
                    </ul>
                </nav>






        )
    }
}
