import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';





export default class NavBar extends Component {


    render(){

        let styleLink = {
            backgroundColor: "white",
            textDecoration: "none"
        }

        return(

                <nav id="theNav" className="navbar navbar-toggleable-md navbar-light" style={{backgroundColor:"lightgoldenrodyellow"}}>
                    <ul className="nav">
                      <li className="nav-item">
                        <NavLink className="nav-link active" to="/" style={styleLink}>BēânLoft</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/products">Products</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/features">Features</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href='#section1'> Go to section 1 </a>
                      </li>
                    </ul>
                </nav>






        )
    }
}
