import React, {Component} from 'react';
import homes from './homeData'


export default class Shells extends Component {
    render(){
        let allShells= homes.shells.map((shell)=>{
            console.log(shell);
            console.log(this.props);
            return (
                <div className="card text-center" key={shell.id}>
                    <div className="card-block">
                        <h4 className="card-title"> Shell Material: {shell.material}</h4>
                        <p className="card-text"> Added Price: ${shell.addedPrice} </p>
                    </div>

                    <img className="card-img-bottom" src={shell.img} alt=""/>
                </div>
            )
        }

        );

        return(
            <div className="shellsPage">
                {allShells}
            </div>

        )
    }
}
