import React, {Component} from 'react';
import homes from './homeData'


export default class Blueprints extends Component {
    render(){

        let allBlueprints= homes.blueprints.map((blueprint)=>{
            console.log(blueprint);
            console.log(this.props);
            return (
                <div className="card text-center" key={blueprint.id}>
                    <div className="card-block">
                        <h4 className="card-title">Blueprint name: {blueprint.name}</h4>
                        <p className="card-text"> Bed/Bath: {blueprint.layout.bedrooms} bedrooms, {blueprint.layout.bathrooms} bath </p>
                        <p className="card-text">Dimensions: {blueprint.dimensionsInFeet.lotLength} ft x {blueprint.dimensionsInFeet.lotWidth} ft </p>
                        <p className="card-text">Blueprint Base Price: ${blueprint.basePrice.string} </p>

                    </div>

                    <img className="card-img-bottom" src={blueprint.photos.exterior} alt=""/>
                </div>
            )
        }

        );
        console.log(allBlueprints);

        return(
            <div className="blueprintsPage">
                {allBlueprints}
            </div>
        )
    }
}
