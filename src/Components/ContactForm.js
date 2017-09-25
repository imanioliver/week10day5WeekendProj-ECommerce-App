import React, {Component} from 'react';


export default class Form extends Component {
    render(){
        return(
            <form>

                <div class="form-group row">
                    <label htmlFor="example-text-input" class="col-2 col-form-label">Your Name</label>
                    <div class="col-10">
                        <input class="form-control" type="text" value="Jean Flannigan" id="example-text-input" placeholder="Name"/>
                    </div>
                </div>

                <div class="form-group row">
                    <label htmlFor="example-email-input" class="col-2 col-form-label">Your Email</label>
                    <div class="col-10">
                        <input class="form-control" type="email" value="yourname@example.com" id="example-email-input" placeholder="Email"/>
                    </div>
                </div>


                <div class="form-group row">
                    <label htmlFor="example-tel-input" class="col-2 col-form-label">Your Number </label>
                    <div class="col-10">
                        <input class="form-control" type="tel" value="1-(555)-555-5555" id="example-tel-input" placeholder="Best Number to reach you"/>
                    </div>
                </div>

                  <button type="submit" className="btn btn-default">Submit</button>
            </form>
        )
    }
};
