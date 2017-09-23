import React, {Component} from 'react';
import ScrollExample from "./ScrollExample";
import Blueprints from './Blueprints';
import Shells from './Shells';
import Roofs from './Roofs';


export default class Home extends Component{

    render(){
        return(
            <div>

            <div className="parentDiv">
                <div className="mainTinyHomeImg">

                    {/*<img src="https://cdn.vox-cdn.com/uploads/chorus_asset/file/7145385/Savannah%20Far%20Away.jpg" alt="tinyhome"/>*/}
                    <h1 id="hotspot"> Your hotspot for tiny homes</h1>
                </div>
            </div>
                <div className="homeText">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod dignissim mauris, sed vestibulum quam bibendum in. Sed eu condimentum purus, nec vestibulum ligula. Nulla vitae lacus eu libero eleifend iaculis. Duis scelerisque egestas libero eu venenatis. Integer nec orper lacinia.</p>


                <ScrollExample/>
                </div>
            </div>

        )
    }

}
