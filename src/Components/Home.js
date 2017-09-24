import React, {Component} from 'react';
import ScrollExample from "./ScrollExample";
// import Blueprints from './Blueprints';
// import Shells from './Shells';
// import Roofs from './Roofs';
import homes from './homeData';


export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            blueprints: [],
            roofs: [],
            shells: []
        }
      }

    //   componentWillMount() {
    //     // let allHomes = homes[0];
    //     let blueprints = homes.blueprints;
    //     let shells = homes.shells;
    //     let roofs = homes.roofs;
    //     this.setState({blueprints: blueprints, roofs: roofs, shells: shells})
    //     console.log(this.state.blueprints);
    // }
    render(){

        // <Blueprints blueprints={this.state.blueprints}/>
        return(
            <div>

            <div className="parentDiv">
                <div className="mainTinyHomeImg">

                    {/*<img src="https://cdn.vox-cdn.com/uploads/chorus_asset/file/7145385/Savannah%20Far%20Away.jpg" alt="tinyhome"/>*/}
                    <div className="homePictureText">

                    <h1 id="beanloft">Bēân<span id="loft">loft</span></h1>
                    <p id="hotspot"> Your hotspot for tiny homes</p>
                    </div>
                </div>
            </div>
                <div className="homeText">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod dignissim mauris, sed vestibulum quam bibendum in. Sed eu condimentum purus, nec vestibulum ligula. Nulla vitae lacus eu libero eleifend iaculis. Duis scelerisque egestas libero eu venenatis. Integer nec orper lacinia.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod dignissim mauris, sed vestibulum quam bibendum in. Sed eu condimentum purus, nec vestibulum ligula. Nulla vitae lacus eu libero eleifend iaculis. Duis scelerisque egestas libero eu venenatis. Integer nec orper lacinia.</p>


                <ScrollExample/>
                </div>
            </div>

        )
    }

}
