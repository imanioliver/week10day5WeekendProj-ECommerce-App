import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';



export default class NavBar extends Component {
    render(){
        return(


            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <NavLink className="navbar-brand" to="1">Tiny Bēân</NavLink>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="">Home <span className="sr-only">(current)</span></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="#">Features</NavLink>
                  </li>
                  <li className="nav-item">
                    <a href='#section1'> Go to prices </a>
                  </li>

                </ul>
              </div>
            </nav>



        )
    }
}
