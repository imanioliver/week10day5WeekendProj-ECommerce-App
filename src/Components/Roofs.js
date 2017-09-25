import React, {Component} from 'react';
import homes from './homeData'


export default class Roofs extends Component {
    render(){
        let allRoofs= homes.roofs.map((roof)=>{
            console.log(roof);
            console.log(this.props);
            return (
                <div className="card text-center" key={roof.id}>
                    <div className="card-block">
                        <h4 className="card-title"> Roof Style: {roof.type}</h4>
                        <p className="card-text"> Added Price: ${roof.addedPrice} </p>
                    </div>

                    <img className="card-img-bottom" src={roof.img} alt=""/>
                </div>
            )
        }

        );

        return(
            <div className="shellsPage">
                {allRoofs}
            </div>

        )
    }
}
