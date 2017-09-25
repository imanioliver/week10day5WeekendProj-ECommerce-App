import React, {Component} from 'react';
// import ScrollableAnchor from 'react-scrollable-anchor';
import Form from './ContactForm'


export default class Contact extends Component {
    render(){


        let mapSize = {
            "height": "300px",
            "width":"500px"
        }
        return(
<div>

            <div className="col-lg-4">
              <h3 className="sub-headings">Contact Us</h3>
              <Form/>
            </div>


            <div className="app-body findus offset col-lg-10 col-lg-offset-1">
                    <section className="row" >
                      <div className="col-lg-8 map">
                        <h3 className="sub-headings" >Directions</h3>
                        <img
                          className="img-responsive" style={mapSize}
                          src="https://maps.googleapis.com/maps/api/staticmap?center=greenville,sc&zoom=13&scale=2&size=600x300&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7Cgreenville,+sc"
                          alt="Google Map of greenville,sc"/>
                      </div>

                </section>
              </div>

            </div>
        )
    }
}
