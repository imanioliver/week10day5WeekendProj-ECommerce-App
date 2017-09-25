import React, {Component} from 'react';
import ScrollExample from "./ScrollExample";
// import Blueprints from './Blueprints';
// import Shells from './Shells';
// import Roofs from './Roofs';
// import homes from './homeData';


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

                <div className="white">
                    <img className="housePics" src="http://assets.inhabitat.com/wp-content/blogs.dir/1/files/2017/03/Amplified-Tiny-Houselead.jpg" alt=""/>
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod dignissim mauris, sed vestibulum quam bibendum in. Sed eu condimentum purus, nec vestibulum ligula. Nulla vitae lacus eu libero eleifend iaculis. Duis scelerisque egestas libero eu venenatis. Integer nec orper lacinia.</p>
                    </div>
                </div>

                <div className="section3">
                    <img className="housePics" src="https://i.pinimg.com/736x/ce/70/4a/ce704a66fd59c00566f2ee50da5ff5ab--battle-ground-washington-tiny-house-interiors.jpg" alt=""/>
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod dignissim mauris, sed vestibulum quam bibendum in. Sed eu condimentum purus, nec vestibulum ligula. Nulla vitae lacus eu libero eleifend iaculis. Duis scelerisque egestas libero eu venenatis. Integer nec orper lacinia.</p>
                    </div>
                </div>

                <div className="white">
                    <img className="housePics" src="https://i.pinimg.com/736x/6d/12/8f/6d128fa28708225edbdc4593622f3ec4--tiny-house-blog-tiny-house-on-wheels.jpg" alt=""/>
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod dignissim mauris, sed vestibulum quam bibendum in. Sed eu condimentum purus, nec vestibulum ligula. Nulla vitae lacus eu libero eleifend iaculis. Duis scelerisque egestas libero eu venenatis. Integer nec orper lacinia.</p>
                    </div>
                </div>

                <div className="section5">
                    <img className="housePics" src="https://i.pinimg.com/736x/6d/12/8f/6d128fa28708225edbdc4593622f3ec4--tiny-house-blog-tiny-house-on-wheels.jpg" alt=""/>
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod dignissim mauris, sed vestibulum quam bibendum in. Sed eu condimentum purus, nec vestibulum ligula. Nulla vitae lacus eu libero eleifend iaculis. Duis scelerisque egestas libero eu venenatis. Integer nec orper lacinia.</p>
                    </div>
                </div>




            </div>

        )
    }

}
