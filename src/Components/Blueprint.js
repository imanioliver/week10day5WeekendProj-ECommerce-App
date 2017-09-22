import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

export default class Blueprints extends Component {
    render(){
        return(

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
        )
    }
}
